/**
 * 请求默认配置
 */

export default {
  // 参数配置项
  params: {
    body: {
      appId: '100001',
    },
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  },
  // 业务配置项
  config: {
    redirect: false,
    redirectUrl: '/#',
  },
};
