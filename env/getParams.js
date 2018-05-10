// 获取页面中的参数

import queryString from 'query-string';

const params = queryString.parse(window.location.search);
params.communitId = params.communityId;
params.communitName = params.communityName;
delete params.communityId;
delete params.communityName;

if (!params.comeFrom) {
  if (!params.communitId || !params.communitName) {
    params.fake = '意向单参数系非法构造';
  }
}

export default params;
