// W(z) returns principal real solution for w in z = we^w (D: [-1/e, ∞))
function W(z, iters = 250) {
  if (z < -1 / Math.E)
    throw new RangeError('argument `z` is outside of valid domain (principal value for W(z) is complex)', process.argv[1]);

  let w = -1;
  let getDelta = w => z - w * (Math.E ** w);

  let delta = getDelta(w);
  while (Math.abs(delta) > 1e-15 && iters-- > 0) {
    w += delta / (Math.E * z);
    delta = getDelta(w);
  }

  return w;
}

module.exports = W;