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

const curl = bind(Obtain.prototype.curl, obtain)

export default { curl, obtain }
