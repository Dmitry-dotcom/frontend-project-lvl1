export default (min = 1, max = 100) => {
  const randomVal = Math.random() * (max - min + 1) + min;
  return Math.floor(randomVal);
};
