import request from '@/utils/request';

const BASE_API = '/rest/v1/channelaccount';

export default {
  page(data, headers) {
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
  get() {
    return request({
      url: BASE_API+"/data",
      method: 'get',
    });
  },
  bank() {
    return request({
      url: BASE_API+"/bank",
      method: 'get',
    });
  },
  getbank(id) {
    return request({
      url: BASE_API+"/bank/"+id,
      method: 'get',
    });
  }
};
