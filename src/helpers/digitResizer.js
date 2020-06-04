
const digitResizer = (string, currentSize) => {
  const breakPoints = [8, 12, 18];

  breakPoints.forEach((breakPoint) => {
    if (string.length >= breakPoint) {
      return currentSize * 0.6;
    }
    return currentSize;
  });
};
export default digitResizer;
