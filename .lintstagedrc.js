const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = filenames =>
  `yarn prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(', ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  // this will Format by Prettier
  '*.{md,json,js,jsx,ts,tsx,css,scss}': [`yarn prettier --write`],
};
