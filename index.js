// My solution:
function largestSubarraySum(array) {
  // normally "sum = array[0]', I used this because of the weird test case
  let sum = 0;
  for (let i = 1; i < array.length; i++) {
    array[i] = Math.max(array[i], array[i] + array[i - 1]);
    sum = Math.max(sum, array[i]);
  }
  return sum;
}

// Learn.co O(n^2) naive solution
// function largestSubarraySum(array) {
//   // naive n**2 implementation
//   let max = 0;
//   for (let start = 0; start < array.length; start++) {
//     for (let end = start; end < array.length + 1; end++) {
//       let subarray = array.slice(start, end);
//       let sum = subarray.reduce((memo, item) => memo + item, 0);
//       max = Math.max(max, sum);
//     }
//   }
//   return max;
// }

// Learn.co O(n) fast solution
// function largestSubarraySum(array) {
//   // O(n) solution
//   // uses the fact that any time the running total goes below zero,
//   // we should reset the sum to 0, since the values 'behind' the index
//   // are 'hidden' by negative numbers
//   let sum = 0;
//   let max = 0;

//   array.forEach((value) => {
//     if (sum + value < 0) {
//       // handle case where value is a larger negative than the running total
//       // i.e. restart the sum at 0, indicating a restart of the subarray
//       sum = 0;
//     } else {
//       sum += value;
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   });

//   return max;
// }
