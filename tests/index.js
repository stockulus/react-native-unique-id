const test = require('tape')

const uniqueId = require('../index')
const AsyncStorage = require('@react-native-community/async-storage').default

let theId

test('with no store', assert => {
  AsyncStorage.clear()
    .then(() => uniqueId())
    .then(id => {
      theId = id
      assert.ok(id)
      assert.end()
    })
    .catch(error => assert.error(error))
})

test('with store', assert => {
  uniqueId()
    .then(id => {
      assert.equal(id, theId)
      assert.end()
    })
    .catch(error => assert.error(error))
})
