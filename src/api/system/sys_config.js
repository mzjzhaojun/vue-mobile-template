import request from '@/utils/request';

const BASE_API = '/rest/v1/config';

export default {
  listPage(data, headers) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
      headers,
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
  list(data) {
    return request({
      url: BASE_API + '/list',
      method: 'get',
      data,
    });
  },
  listByKey(data) {
    return request({
      url: BASE_API + '/listByKey',
      method: 'get',
      data,
    });
  },
  saveBatch(data) {
    return request({
      url: BASE_API + '/saveBatch',
      method: 'post',
      data,
    });
  },
};
