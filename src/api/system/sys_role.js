import request from '@/utils/request';

const BASE_API = '/rest/v1/role';

export default {
  tree(data) {
    return request({
      url: BASE_API + '/tree',
      method: 'post',
      data,
    });
  },
  list(data) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
    });
  },
  detail(id) {
    return request({
      url: BASE_API + '/'+id,
      method: 'get',
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
      url: BASE_API+ '/'+id,
      method: 'delete'
    });
  },
  updateStatus(id, status) {
    return request({
      url: BASE_API + '/updateStatus',
      method: 'post',
      data: { roleId: id, status: status },
    });
  },
  getScopeIdListByRoleId(id) {
    return request({
      url: BASE_API + '/getscopeidlistbyroleid/'+id,
      method: 'get'
    });
  },
  saveRoleRePerm(data) {
    return request({
      url: BASE_API + '/saverolereperm',
      method: 'post',
      data,
    });
  }
};
