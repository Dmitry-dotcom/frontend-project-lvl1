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
  const progStartNum = getRandomNum();
  const progLength = 10;
  const progStep = getRandomNum(1, progLength);
  const progression = makeProgression(progStartNum, progStep, progLength);

  const progMaskedIndex = getRandomNum(0, progLength - 1);
  const correctAnswer = progression[progMaskedIndex];
  progression[progMaskedIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => engine(taskDescription, getGameData);
