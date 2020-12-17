function largestSubarraySum(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i] = Math.max(array[i], array[i] + array[i - 1]);
    sum = Math.max(sum, array[i]);
  }
  return sum;
}
