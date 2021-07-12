export function buildCssString(styles) {
  return Object.entries(styles).map(([k, v]) => `${k}:${v}`).join(';')
}

export function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
