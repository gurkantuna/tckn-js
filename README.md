# tckn

This is just a simple tool written to generate mock data and validate for the Turkish Republic Identity Number for testing purposes.<br>

```js
const tckn = Tckn.generate();
const isValidated = Tckn.validate(tckn);
```