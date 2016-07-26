seq-id-generator-react-native
====
generates an sequence id (1, 2, 3, 4...), based on asyncstorage

### Usage

```bash
npm i seq-id-generator-react-native
```

```js
const name = 'purchase'
const seqIdGenerator = require('seq-id-generator-react-native')

seqIdGenerator(name)
  .then((generator) => generator.next())
  .then((id) => console.log(id))
  .catch((error) => console.error(error))

// with formating Function
seqIdGenerator(name, id => `A-${id}`)
  .then((generator) => generator.next())
  .then((id) => console.log(id))
  .catch((error) => console.error(error))

// or callback style
seqIdGenerator(name, null, (error, generator) => {
  if (error) return console.error(error)
  generator.next((error, id) => {
    if (error) return console.error(error)
    console.log(id)
  })
})

```

---
Feedback welcome:
Twitter: [@stockulus](https://twitter.com/stockulus)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
