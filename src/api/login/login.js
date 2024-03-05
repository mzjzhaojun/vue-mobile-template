import { useUserStore } from "@/stores/user";
import sysUserApi from '@/api/system/sys_user.js';
import merchantaccountApi from '@/api/merchant/merchantaccount.js';

// 模拟登陆，实际需要调用request进行登录请求
export async function apilogin(username, password) {
        let result = await sysUserApi.login({
            username: username.trim(),
            password: password.trim(),
        });
        return result.body;
}

export async function apiinitrsakey() {
    let result = await sysUserApi.getrsakey();
    return result.body;
}


export async function apiGetUserInfo() {
    let result = await merchantaccountApi.get();
    return result.body;
}


export function apilogout(token) {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            msg: '退出成功'
        })
    });
}
