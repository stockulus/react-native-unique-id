'use strict'

const AsyncStorage = require('@react-native-community/async-storage').default
const polygoat = require('polygoat')

let id

const generate = () => {
  const gen = count => {
    let out = ''
    for (let index = 0; index < count; index++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return out
  }

  return [gen(2), gen(1), gen(1), gen(1), gen(3)].join('-')
}

/**
 * @param {function} [callback]
 * @return {Promise} if uses without callback
 */
module.exports = function uniqueId (callback) {
  return polygoat(done => {
    if (id) return done(null, id)

    AsyncStorage.getItem('__uniqueId', (error, data) => {
      if (error || !data) {
        const generatedId = generate()

        AsyncStorage.setItem('__uniqueId', generatedId, error => {
          if (error) return done(error)
          id = generatedId
          done(null, id)
        })
      } else {
        id = data
        done(null, id)
      }
    })
  }, callback)
}
