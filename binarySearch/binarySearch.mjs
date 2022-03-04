export const binarySearch = (arr, item) => {
  arr.sort((a, b) => a - b);
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    // return true if item is found
    if (arr[mid] === item) return true;
    // mid + 1 because we want to exclude the previous middle
    if (arr[mid] < item) start = mid + 1;
    // mid - 1 because we want to exclude the previous middle
    else end = mid - 1;
  }
  // return false if item not found
  return false;
};
