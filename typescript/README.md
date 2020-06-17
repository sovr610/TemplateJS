# Installation

1. run command `npm install -g gulp gulp-cli mocha chai eslint`

2. run command `npm install` in the root directory of this project.

## commands

npm run test: `mocha -r ts-node/register test.ts` -> runs the test for test.ts with mocha.

nnpm run tsc: `tsc` -> convert typescript to javascript.

npm run dev: `ts-node-dev --respawn --transpileOnly ./app.ts` -> run the app.ts without converting to javascript.

npm run prod: `npm run publish && node ./bin/all-min.js` -> convert typescript to javascript and run it.

npm run publish: `tsc && gulp && gulp minify` -> convert typescript to javascript, bundle js files and minify js file.