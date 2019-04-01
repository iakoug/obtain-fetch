/**
 * main
 */
import obtain from './core'

obtain.interceptor.response.use(
  res => res.json(),
  err => ({ err, msg: 'oops, something wrong...'})
)

export default obtain
