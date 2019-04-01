/**
 * main
 */
import Obtain from './core'

import { bind } from './util'

const obtain = new Obtain()

obtain.interceptor.response.use(
  res => res.json(),
  err => ({ err, msg: 'oops, something wrong...'})
)

const curl: any = bind(Obtain.prototype.curl, obtain)

curl.use = function(plugin: Function) {
  if (typeof plugin !== 'function') {
    return console.error('Error: plugin must be a function!')
  }

  plugin(obtain)
}

export default curl
