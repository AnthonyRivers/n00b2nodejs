/**
 * timer.js
 *
 * Timing functions set timeout,
 * clear timeout, set interval,
 * clear interval work the same
 * way they do in the browser and
 * they are available globally.
 *
 */

const waitTime = 3000;
console.log(`Setting a ${waitTime/1000} second delay.`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);

