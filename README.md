# jsdom-leak-repro

This is a reproduction of the problem I have with cleaning Window object from `jsdom`. Even after manual `global.gc()` call it's still retained.

Run `yarn` or `npm install` to install deps (`jsdom` only).

Run `npm run test` to see the output of `index.js` file. It will run with `--inspect` flag, so you can inspect in Chrome DevTools.
