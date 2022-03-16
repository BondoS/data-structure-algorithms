/*
    Time: O(n^2)
    Space: O(1)
  */
export const selectionSort = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
