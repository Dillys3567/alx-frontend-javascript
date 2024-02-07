export default function divideFunction(numerator, denominator) {
  let res;
  if (denominator !== 0) {
    res = numerator / denominator;
    return res;
  } else {
    throw new Error('cannot divide by 0');
}
}
