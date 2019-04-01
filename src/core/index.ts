/**
 * obtain fetch
 */
import Interceptor from './interceptor'
import request from './fetch'

interface TypeInterceptor {
  request: Interceptor,
  response: Interceptor
}

class Obtain {
  public interceptor: TypeInterceptor
  public concurrency: number

  constructor() {
    this.interceptor = {
      request: new Interceptor(),
      response: new Interceptor()
    }
  }
  fetch(url, options) {
    console.log(this.concurrency, '-----this.concurrency-----')
    return () => request(url, options, this.concurrency)
  }

  curl(url: string, options: any = {}): Promise<any> {
    options.method = options.method || 'GET'

    let promise = Promise.resolve(options)
    /**
      // Collection interceptor
      const requestHandler: Array<Array<any>> = []
      const responseHandler: Array<Array<any>> = []

      this.interceptor.request.reducer(handlerList => requestHandler.push(handlerList))
      this.interceptor.response.reducer(handlerList => responseHandler.push(handlerList))

      // excute request inteceptor
      while (requestHandler.length) {
        promise = promise.then(...requestHandler.shift())
      }
    */

    const chain: Array<any> = [[this.fetch(url, options), undefined]]

    this.interceptor.request.reducer(handlerList => chain.unshift(handlerList))
    this.interceptor.response.reducer(handlerList => chain.push(handlerList))

    /**
     * return new Promise((resolve, reject) => {
        fetch(url, options).then(
          async res => {
            resolve(await res.json())

            // excute response inteceptor
            while (responseHandler.length) {
              promise = promise.then(...responseHandler.shift())
            }
          },
          err => reject(err)
        )
      })
     */
    // excute chain inteceptor
    while (chain.length) {
      promise = promise.then(...chain.shift())
    }

    return promise
  }
}

export default Obtain
