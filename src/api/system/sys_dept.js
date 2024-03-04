import request from '@/utils/request';

const BASE_API = '/rest/v1/dept';

export default {
  tree(data) {
    return request({
      url: BASE_API + '/tree',
      method: 'get',
      data,
    });
  },
  add(data) {
    return request({
      url: BASE_API,
      method: 'post',
      data: data,
    });
  },
  update(data) {
    return request({
      url: BASE_API,
      method: 'put',
      data: data,
    });
  },
  delete(data) {
    return request({
      url: BASE_API + '/'+data,
      method: 'delete',
    });
  },
};
