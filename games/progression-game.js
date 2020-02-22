import getRandomNum from '../utility/randomNum.js';
import engine from '../src/engine.js';

const taskDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = [];
  const progressionStep = getRandomNum(1, 10);
  let n = getRandomNum();

  for (let i = 0; i < 10; i += 1) {
    progression.push(n);
    n += progressionStep;
  }

  const progressionIndex = getRandomNum(0, 9);
  const correctAnswer = progression[progressionIndex];
  progression[progressionIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => engine(taskDescription, getGameData);
