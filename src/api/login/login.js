import { useUserStore } from "@/stores/user";
import sysUserApi from '@/api/system/sys_user.js';

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
    console.info(result)
    return result.body;
}


export async function apiGetUserInfo() {
    let result = await sysUserApi.getUserPerm();
    console.info(result)
    return result.body;
}


// 模拟请求用户信息，正常是需要传入token后进行登出
export function apilogout(token) {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            msg: '退出成功'
        })
    });
}
