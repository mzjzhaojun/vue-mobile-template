import request from '@/utils/request'

const BASE_API = '/rest/v1/dicttype'

export default {
  list() {
    return request({
      url: BASE_API + '/list',
      method: 'post',
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
