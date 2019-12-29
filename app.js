/**
 * app.js
 * 
 * The module can be destructure to just import 
 * the desire methods or functions instead of having
 * to reference the module using a variable.
 * Ex: const { inc, dec, getCount } = require("./mymodule");
 * Now it is possible to just use in() instead of counter.inc()
 */
const counter = require("./mymodule");

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

console.log(counter.name);
