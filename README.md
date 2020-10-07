# DescentLW

An extremely lightweight function for (naively) computing the principal value of the Lambert W-Function when it is real.

## Use

```js
const W = require('./DescentLW/descentLW.js');

console.log(W(1)); //=> 0.567143290409784
console.log(W(1e10)); //=> 20.02868541330495
console.log(W(-1)); //=> RangeError: argument `z` is outside of valid domain (principal value for W(z) is complex)
```

## Interface

The export is a function in the form of:  `W(z[, maxIters = 250])`.
