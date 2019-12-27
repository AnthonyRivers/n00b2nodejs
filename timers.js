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
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
	currentTime += waitInterval;
	console.log(`waiting ${currentTime/1000} seconds`);
};

console.log(`Setting a ${waitTime/1000} second delay.`);

const timerFinished = () => {
	clearInterval(interval);
	console.log("done");
};

const interval = setInterval(incTime, waitInterval);

setTimeout(timerFinished, waitTime);

