import request from '@/utils/request';

const BASE_API = '/rest/v1/scopedata';

export default {
  tree(query) {
    return request({
      url: BASE_API + '/tree',
      method: 'get',
      params: query,
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
  delete(id) {
    return request({
      url: BASE_API+"/"+id,
      method: 'delete',
    });
  },
};
