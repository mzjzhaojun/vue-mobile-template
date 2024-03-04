import request from '@/utils/request'

const BASE_API = '/rest/v1/dict'

export default {
  listFromCacheByCode(code) {
    return request({
      url: BASE_API + '/listfromcachebycode/'+code,
      method: 'get'
    })
  },
  listByCode(data) {
    return request({
      url: BASE_API + '/listbycode',
      method: 'post',
      data,
    })
  },
  add(data) {
    return request({
      url: BASE_API,
      method: 'post',
      data,
    })
  },
  update(data) {
    return request({
      url: BASE_API,
      method: 'put',
      data,
    })
  },
  delete(id) {
    return request({
      url: BASE_API+"/"+id,
      method: 'delete',
    })
  },
}
