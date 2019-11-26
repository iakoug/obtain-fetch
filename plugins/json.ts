/**
 * @description 处理返回数据
 */

module.exports = function(instance) {
  instance.interceptors.response.use(
    async (res) =>
      res.status === 200
        ? await res.json()
        : Promise.reject({
            errorMsg: `[${res.status}]${res.statusText}, Please check your fetch parameters.`,
          }),
    undefined,
  );
};
