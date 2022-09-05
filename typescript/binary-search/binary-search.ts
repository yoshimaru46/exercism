export function find(haystack: number[], needle: number): number | unknown {
  let left = 0;
  let right = haystack.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (haystack[middle] === needle) {
      return middle;
    } else if (haystack[middle] < needle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  throw new Error("Value not in array");
}
