# currencycom-api

Currency.com (Cripto Exchange) API client

## Getting Started
Install the module with: `npm install currencycom-api`

Require module in you code
```javascript
const currencyapi = require('currencycom-api')("your_key", "your_secret");
```

Used
```javascript
currencyapi.get("/account").then((response) => {
    // your code
});
// or with await
const response = await currencyapi.get("/account");
```

### Methods
`get(uri, params)` - Get method

`post(uri, params)` - Post method

`execute(method, uri, params)` - Get method

## Documentation
[Currency.com Trade API](https://currency.com/ru/api)

## Release History
_0.1.0_

## License
Copyright (c) 2020 Slauta Roman <slro@yandex.ru> 
Licensed under the MIT license.