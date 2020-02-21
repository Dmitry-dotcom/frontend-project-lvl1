import getRandomNum from '../utility/randomNum.js';
import engine from '../src/engine.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  const question = `${a} ${b}`;
  const divisor = a < b ? a : b;

  for (let i = divisor; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      const correctAnswer = i;
      return [question, correctAnswer];
    }
  }

  return false;
};

export default () => engine(taskDescription, getGameData);
