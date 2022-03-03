export const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (right, left) => {
  const res = [];
  while (right.length && left.length) {
    if (right[0] < left[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  return [...res, ...left, ...right];
};
