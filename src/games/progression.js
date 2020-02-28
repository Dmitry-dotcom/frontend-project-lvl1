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
  const progressionStart = getRandomNum();
  const progressionLength = 10;
  const progressionStep = getRandomNum(1, progressionLength);
  const progression = makeProgression(progressionStart, progressionStep, progressionLength);

  const progressionMaskedIndex = getRandomNum(0, progressionLength - 1);
  const answer = progression[progressionMaskedIndex];
  progression[progressionMaskedIndex] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => engine(taskDescription, getGameData);
