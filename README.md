# Cli Progress
This is a wrapper around `cli-progress` package with personal preferences.

## Installation
```bash
pnpm install @kalimahapps/cli-progress
```

## Usage
```typescript
import { createProgressBar, createHeader } from '@kalimahapps/cli-progress';

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
```

## API
### `createHeader`
Creates a header with a title.

#### Parameters
- `title: string`: The title of the header.


### `createProgressBar`
Creates a progress bar.

#### Parameters
- `prefix?: string`: Content to display before the progress bar.
