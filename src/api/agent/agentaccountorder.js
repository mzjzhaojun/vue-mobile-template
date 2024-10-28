import request from '@/utils/request';

const BASE_API = '/rest/v1/agentaccountorder';

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
  withdraw(data) {
    return request({
      url: BASE_API+'/withdraw',
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
  pass(id) {
    return request({
      url: BASE_API+"/pass/"+id,
      method: 'put',
    });
  },
  turndown(id) {
    return request({
      url: BASE_API+"/turndown/"+id,
      method: 'put',
    });
  },
  cancle(id) {
    return request({
      url: BASE_API+"/cancle/"+id,
      method: 'put',
    });
  },
  passwithdraw(id) {
    return request({
      url: BASE_API+"/passwithdraw/"+id,
      method: 'put',
    });
  },
  turndownwithdraw(id) {
    return request({
      url: BASE_API+"/turndownwithdraw/"+id,
      method: 'put',
    });
  },
  canclewithdraw(id) {
    return request({
      url: BASE_API+"/canclewithdraw/"+id,
      method: 'put',
    });
  }
};
