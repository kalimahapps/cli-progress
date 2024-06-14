import cliProgress from 'cli-progress';
import colors from 'chalk';
import type { SingleBar, Options } from 'cli-progress';

const formatBar = function (progress: number, options: Options) {
	const { barCompleteString, barIncompleteString, barsize, barGlue } = options;

	// calculate barsize
	const completeSize = Math.max(0, Math.round(progress * barsize));
	const incompleteSize = Math.max(0, barsize - completeSize);

	const barComplete = barCompleteString.slice(0, completeSize);
	const barIncomplete = barIncompleteString.slice(0, incompleteSize);

	// generate bar string by stripping the pre-rendered strings
	const results = [
		colors.greenBright(barComplete),
		barGlue,
		colors.gray.dim(barIncomplete),
	];
	return results.join('');
};

const formatTime = function (time: number) {
	const seconds = Math.round(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	const timeValues = [minutes, remainingSeconds].filter(Boolean);
	return `${timeValues.join('m ')}s`;
};

const createHeader = (text: string) => {
	const header = colors.bgBlue(` ${text} `);
	console.log('\n');
	console.log(header);
};

const createProgressBar = (prefix?: string): SingleBar => {
	const formatString = [prefix, '{bar} {percentage}%'].filter(Boolean);
	const bar = new cliProgress.SingleBar({
		format: formatString.join(' '),
		barCompleteChar: '━',
		barIncompleteChar: '━',
		formatBar,
	});
	const startTime = performance.now();
	bar.on('stop', () => {
		const endTime = performance.now();
		const formattedTime = formatTime(endTime - startTime);
		console.log(` ${colors.black.bgGreenBright(` ${formattedTime} `)}`);
	});
	bar.start(100, 0);

	return bar;
};

export { createProgressBar, createHeader };