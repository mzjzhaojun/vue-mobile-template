import request from '@/utils/request';

const BASE_API = '/rest/v1/sprovincecityarea';

export default {
  tree(data) {
    return request({
      url: BASE_API + '/tree',
      method: 'post',
      data,
    });
  },
};
