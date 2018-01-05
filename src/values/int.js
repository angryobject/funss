export default function int(v) {
  const n = +v;

  if (isNaN(n) || n % 1 !== 0) {
    return null;
  }

  return '' + v;
}
