import getRandomNum from '../utility/randomNum.js';
import engine from '../src/engine.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const num = getRandomNum();
  const isEven = num % 2 === 0;

  const question = num;
  const correctAnswer = isEven ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engine(taskDescription, getGameData);
