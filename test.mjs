export const test = (desc, cb) => {
  // test success if the return of the callback is true
  if (cb()) {
    return console.log(`%c -  Test success > ${desc} <`, 'color:green;');
  }
  return console.log(`%c - Test failed > ${desc} <`, 'color:red;');
};
