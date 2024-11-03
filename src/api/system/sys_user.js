import request from '@/utils/request';

const BASE_API = '/rest/v1/user';

export default {
  // 获取验证码
  getCaptcha(data) {
    return request({
      url: '/rest/v1/auth/qrcode',
      method: 'post',
      data,
      headers: {
        Tenant_Flag: 'true',
      },
    });
  },
  // 登录
  login(data) {
    return request({
      url: '/app/v1/auth/logintelegrame',
      method: 'post',
      data,
      headers: {
        Tenant_Flag: 'true',
       },
    });
  },
  // 注销
  logout() {
    return request({
      url: '/app/v1/auth/logoutapp',
      method: 'get',
    });
  },
  // 获取用户权限
  getuser() {
    return request({
      url: '/app/v1/auth/getuser',
      method: 'get',
      // params: { systemSource: 0 }
    });
  },
  // 获取用户权限
  getuseraccount(id) {
    return request({
      url: '/app/v1/auth/getuseraccount/'+id,
      method: 'get',
    });
  },
  listPage(data, headers) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
      headers,
    });
  },
  list(data) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
    });
  },
  add(data) {
    return request({
      url: BASE_API,
      method: 'post',
      data,
    });
  },
  update(data) {
    return request({
      url: BASE_API,
      method: 'put',
      data,
    });
  },
  delete(id) {
    return request({
      url: BASE_API+"/"+id,
      method: 'delete',
    });
  },
  get(id) {
    return request({
      url: BASE_API+"/"+id,
      method: 'get',
    });
  },
  updateStatus(id, status) {
    return request({
      url: BASE_API + '/updateStatus',
      method: 'post',
      data: { userId: id, status: status },
    });
  },
  getrsakey() {
    return request({
      url: '/rest/v1/auth/getrsakey',
      method: 'get',
    });
  },
  verCaptcha(data) {
    return request({
      url: '/rest/v1/auth/verqrcode',
      method: 'post',
      data,
      headers: {
        Tenant_Flag: 'true',
      },
    });
  },
  checkgoogle(code) {
    return request({
      url: BASE_API+'/checkgoogle/' + code,
      method: 'post',
    });
  },
  resetpassword(data) {
    return request({
      url: BASE_API,
      method: 'put',
      data,
    });
  },
};
