
/**
 * obtain fetch
 */

 interface params {
    method: string,
    data: object
 }

const interceptors_req = [], interceptors_res = []
   
function obtain_fetch (url, options: params): Promise<any> {
  options.method = options.method || 'GET'
  
  interceptors_req.forEach(interceptors => {
    options = interceptors(options)
  })
  
  return new Promise<any>(function (resolve, reject) {
    fetch(url, options).then(res => {
      interceptors_res.forEach(interceptors => res = interceptors(res))

      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

}

obtain_fetch.interceptors = {
  request: {
    use: (fn: Function): number => interceptors_req.push(fn)
  },
  response: {
    use: (fn: Function): number => interceptors_res.push(fn)
  }
}

module.exports =  obtain_fetch
