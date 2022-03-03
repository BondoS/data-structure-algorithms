export const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    // Notice that j < arr.length - i - 1 for optimization.
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    // Optimization -> stop looping if the last iteration had no swaps.
    if (!swap) break;
  }
  return arr;
};
