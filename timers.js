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

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
	currentTime += waitInterval;
	const p = Math.floor((currentTime / waitTime) * 100);
	//console.log(`waiting ${currentTime/1000} seconds`);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
};

console.log(`Setting a ${waitTime/1000} second delay.`);

const timerFinished = () => {
	clearInterval(interval);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	console.log("done");
};

const interval = setInterval(incTime, waitInterval);

setTimeout(timerFinished, waitTime);

