import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => engine(taskDescription, getGameData);
