# tckn

This is just a simple tool written to generate mock data and validate for the Turkish Republic Identity Number for testing purposes.<br>

```js
import { Tckn } from './node_modules/tckn/main.js';

const tckn = Tckn.generate();
const isValid = Tckn.validate(tckn) ? "valid" : "invalid";
document.querySelector("#lblTckn").innerText = `${tckn}, the number is ${isValid}`;
```