import request from '@/utils/request';

const BASE_API = '/rest/v1/incomemerchantaccountrecord';

export default {
  page(data, headers) {
    return request({
      url: BASE_API + '/page',
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
  get(id) {
    return request({
      url: BASE_API+"/"+id,
      method: 'get',
    });
  },
  remotebalance(id){
    return request({
      url: BASE_API+"/remotebalance/"+id,
      method: 'get',
    });
  }
};
