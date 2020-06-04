
const digitAdder = (currentNum, digit) => {
  const re = /\d+\.\d*/;
  if (!(re.test(currentNum) && digit === '.')) {
    const result = currentNum + digit;
    return result;
  }
  return currentNum;
};
export default digitAdder;
