export const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      arr[i] < arr[pivotIndex] ? less.push(arr[i]) : greater.push(arr[i]);
    }
  }
  return [...quickSort(less), arr[pivotIndex], ...quickSort(greater)];
};
