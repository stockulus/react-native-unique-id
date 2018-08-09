# react-native-unique-id

generates a guid and stores it in the async store
This is supposed to identify the device / user.
It creates a guid if no exists and stores it in the AsyncStorage.
If a Guid exists, this will be returned

[![npm Package](https://img.shields.io/npm/dm/react-native-unique-id.svg)](https://www.npmjs.com/package/react-native-unique-id) [![npm Package](https://img.shields.io/npm/v/react-native-unique-id.svg)](https://www.npmjs.com/package/react-native-unique-id) [![travis-ci.org](https://travis-ci.org/stockulus/react-native-unique-id.svg)](https://travis-ci.org/stockulus/react-native-unique-id) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![license](https://img.shields.io/npm/l/react-native-unique-id.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

### Usage

```bash
npm install react-native-unique-id --save
```

```js
const uniqueId = require("react-native-unique-id");

uniqueId()
  .then(id => console.log(id))
  .catch(error => console.error(error));

// or callback style

uniqueId((error, id) => {
  if (error) return console.error(error);
  console.log(id);
});
```

---

[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/stockulus)
[![GitHub stars](https://img.shields.io/github/stars/stockulus/react-native-unique-id.svg?style=social&label=Star)](https://github.com/stockulus/react-native-unique-id)
