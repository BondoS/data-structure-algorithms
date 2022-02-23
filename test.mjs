export const test = (desc, cb) => {
  // test success if the return of the callback is true
  if (cb()) {
    return console.log(`%c -  test success > ${desc} <`, 'color:green;');
  }
  return console.log(`%c - test failed > ${desc} <`, 'color:green;');
};
