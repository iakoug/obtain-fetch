/**
 *  Interceptor 
 **/
class Interceptor {
	handlers: Array<Array<Function | undefined | number | null>>
  constructor() {
    this.handlers = [];
  }

  /**
   * 拦截器的成功和失败回调入栈
   * @param  {...Function} fns
   * @member {Function} fulfilled
   * @member {Function} rejected
   */
  use(...fns) {
    this.handlers.push(fns);
  }

  reducer(fn) {
    this.handlers.forEach((v) => fn(v));
  }
}

export default Interceptor
