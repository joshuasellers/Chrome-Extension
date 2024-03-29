'use strict';

// source: https://github.com/google/page-timer/blob/master/background.js
function FormatTime(time) {
  if (time < 0) {
    return "ERROR";
  }
  var divisor = time < 3600000 ? [60000, 1000] : [3600000, 60000];
  function pad(x) {
    return x < 10 ? "0" + x : x;
  }
  return Math.floor(time / divisor[0]) + ":" + pad(Math.floor((time % divisor[0]) / divisor[1]));
}
