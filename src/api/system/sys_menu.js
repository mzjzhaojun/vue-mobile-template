import request from '@/utils/request';

const BASE_API = '/rest/v1/menu';

export default {
  tree(data) {
    return request({
      url: BASE_API + '/tree',
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
  delete(data) {
    return request({
      url: BASE_API+"/"+data,
      method: 'delete',
    });
  },
};
