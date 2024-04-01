const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  // this will check Typescript files
  '*.{ts,tsx}': () => 'yarn tsc --noEmit',
  // this will Format by Prettier
  '*.{md,json,js,jsx,ts,tsx,css,scss}': filenames => `yarn prettier --write ${filenames.join(', ')}`,
};
