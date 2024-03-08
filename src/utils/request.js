import axios from 'axios';
import {Dialog } from 'vant';
import {b64tohex, KJUR} from 'jsrsasign'
import CryptoJS from 'crypto-js'
import forge from 'node-forge'
import {useUserStore } from "@/stores/user";
import {getToken, removeToken ,getTenantId,getRsapublickey} from './auth';
import {useRouter} from "vue-router";

const router = useRouter();

// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVICE_API,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 添加请求拦截器
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const userStore = useUserStore();
        if (!config.headers) {
            throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
        }
        if (getToken()) {
            config.headers['Satoken'] = getToken();
        }
        if (config.data != null) {
            let key = getKey()
            config.data = encrypt(JSON.stringify(config.data), key);
            config.headers['signa'] = pubencrypt(key, getRsapublickey());
        }
        config.headers['Tenant_Id'] = getTenantId();

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        let res = response.data;
        if(res.code == null){
            let verifyResult = pubverify(response.headers['signa'],getRsapublickey(),response.headers['sign']);
            if (!verifyResult) {
                handleError();
                return ;
            }
            res = JSON.parse(aesDecrypt(res, response.headers['signa']));
        }
        const { code, msg } = res;
        if (code === 200) {
            return res;
        }else if (code === 401 || code === 303 || code === 500) {
            handleError();
        }
        Dialog.alert({ message: msg });
    },
    (error) => {
        console.log('请求异常：', error);
        let msg = "服务器网络异常，请稍后再试!";
        if (error.code === "ERR_NETWORK" || error.code === "ERR_BAD_REQUEST") {
            Dialog.alert({
                message: msg
            });
        } else {
            handleError();
            return Promise.reject(new Error(msg));
        }
    }
);


// 统一处理请求响应异常
function handleError() {
    removeToken();
    //router.push({ path: '/login' });
    window.location.href = '/#/login';
}


function getKey(num = 16) {
    var amm = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '_', 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var tmp = Math.floor(Math.random() * num)
    var s = tmp
    s = s + amm[tmp]
    for (let i = 0; i < Math.floor(num / 2) - 1; i++) {
        tmp = Math.floor(Math.random() * 26)
        s = s + String.fromCharCode(65 + tmp)
    }
    for (let i = 0; i < (num - Math.floor(num / 2) - 1); i++) {
        tmp = Math.floor(Math.random() * 26)
        s = s + String.fromCharCode(97 + tmp)
    }
    return s
}

function encrypt(data, AES_KEY) {
    const key = CryptoJS.enc.Utf8.parse(AES_KEY)
    const encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
}

function pubencrypt(aeskey, pubencryptKey) {
    const publicKeyAll = '-----BEGIN PUBLIC KEY-----\n' + pubencryptKey + '\n-----END PUBLIC KEY-----'
    let publicKey = forge.pki.publicKeyFromPem(publicKeyAll)
    let buffer = forge.util.createBuffer(aeskey, 'utf8')
    let bytes = buffer.getBytes()
    return forge.util.encode64(publicKey.encrypt(bytes, 'RSAES-PKCS1-V1_5'))
}

function pubverify(aeskey, pubencryptKey, sign) {
    const publicKeyAll = '-----BEGIN PUBLIC KEY-----\n' + pubencryptKey + '\n-----END PUBLIC KEY-----'
    try {
        let sig =  new KJUR.crypto.Signature({alg: "MD5withRSA"});
        sig.init(publicKeyAll)
        sig.updateString(aeskey)
        return sig.verify(b64tohex(sign))
    } catch (e) {
        console.log(e)
    }
}

// AES 加密  data：要加密解密的数据，AES_KEY：密钥，
function aesDecrypt(data, AES_KEY) {
    // console.log("---------------------开始解密AES")
    const decrypted = CryptoJS.AES.decrypt(data.toString(), CryptoJS.enc.Utf8.parse(AES_KEY), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
}

// 导出 axios 实例
export default service;