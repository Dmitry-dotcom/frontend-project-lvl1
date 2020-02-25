import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const divisor = a < b ? a : b;

  for (let i = divisor; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return false;
};

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  const question = `${a} ${b}`;
  const answer = getGcd(a, b);

  return [question, answer];
};

export default () => engine(taskDescription, getGameData);
