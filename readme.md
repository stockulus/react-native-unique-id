react-native-unique-id
====
generates an sequence id (1, 2, 3, 4...), based on asyncstorage

### Usage

```bash
npm install react-native-unique-id --save
```

```js
const uniqueId = require('react-native-unique-id')

uniqueId()
  .then((id) => console.log(id))
  .catch((error) => console.error(error))

```

---
Feedback welcome:
Twitter: [@stockulus](https://twitter.com/stockulus)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
