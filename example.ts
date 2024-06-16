import { createProgressBar, createHeader } from './index.js';

// Create a header
createHeader('Header');

// Create a progress bar
const progress = createProgressBar('Downloading');
for (let index = 0; index <= 100; index++) {
	await new Promise((resolve) => {
		return setTimeout(resolve, 10);
	});
	progress.update(index);
}
progress.stop();