import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const num = start + step * i;

    result.push(num);
  }

  return result;
};

const getGameData = () => {
  const start = getRandomNum();
  const length = 10;
  const step = getRandomNum(1, 10);
  const progression = makeProgression(start, step, length);

  const maskedIndex = getRandomNum(0, length - 1);
  const answer = progression[maskedIndex];
  progression[maskedIndex] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

export default (name) => engine(name, taskDescription, getGameData);
