'use strict';

const jsdom = require('jsdom');
const toMB = bytes => Math.floor(bytes / 1024 / 1024);

function spawnWindow(index) {
  let document = jsdom.jsdom({ url: 'about:blank' });
  let window = document.defaultView;

  try {
    const bytes = process.memoryUsage().heapUsed;
    console.log(index, `(${toMB(bytes)} MB)`);
  } catch(error) {
    console.log(index);
  }

  window.close();

  if (global.gc) {
    global.gc();
  }
}

for (let i = 0; i < 10000; i++) {
  spawnWindow(i);
}
