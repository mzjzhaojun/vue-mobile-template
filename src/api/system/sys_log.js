import request from '@/utils/request';

const BASE_API = '/rest/v1/logs';

export default {
  page(data, headers) {
    return request({
      url: BASE_API + '/list',
      method: 'post',
      data,
      headers,
    });
  },
};
