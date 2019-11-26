/** 控制并发
 * https://github.com/rollawaypoint/fetch-concurrency
 */
const concurrency = require('request-concurrency')

const fetch = require('node-fetch')

let concurrencyFetch = null

export default (url, options, concurrencyNumber?) => {
  if (concurrencyNumber) {
    if (!concurrencyFetch) {
      concurrencyFetch = concurrency(fetch, concurrencyNumber)
    }

    return concurrencyFetch(url, options)
  }

  return fetch(url, options)
}
