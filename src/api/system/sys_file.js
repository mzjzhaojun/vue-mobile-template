import request from '@/utils/request';

const BASE_API = '/rest/v1/file';

export default {
  page(data, headers) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
      headers,
    });
  },
  delete(id) {
    return request({
      url: BASE_API + '/'+id,
      method: 'delete',
    });
  },
};
