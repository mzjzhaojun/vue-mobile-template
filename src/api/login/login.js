import { useUserStore } from "@/stores/user";
import sysUserApi from '@/api/system/sys_user.js';

// 模拟登陆，实际需要调用request进行登录请求
export async function apilogin(username, password,code) {
        let result = await sysUserApi.login({
            username: username,
            password: password,
            code:code,
        });
        return result.body;
}

export async function apiinitrsakey() {
    let result = await sysUserApi.getrsakey();
    return result.body;
}


export async function apiGetUserInfo() {
    let result = await sysUserApi.getuser();
    return result.body;
}

export async function apiGetUserAccount(id) {
    let result = await sysUserApi.getuseraccount(id);
    return result.body;
}


export async function apilogout() {
    let result = await sysUserApi.logout();
    return result.body;
}
