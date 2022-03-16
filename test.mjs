export const test = (desc, cb) => {
  // test success if the return of the callback is true
  if (cb()) {
    return console.log(`\u001b[1;32m- Test success > ${desc} <`);
  }
  return console.log(`\u001b[1;31m- Test failed > ${desc} <`);
};
