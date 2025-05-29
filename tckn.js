//import { Tckn } from './node_modules/tckn/main.js';
import { Tckn } from './index.js';

const tckn = Tckn.generate();
const isValid = Tckn.validate(tckn) ? "valid" : "invalid";
document.querySelector("#lblTckn").innerText = `${tckn}, the number is ${isValid}`;