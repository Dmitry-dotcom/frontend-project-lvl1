import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const index = getRandomNum(0, operations.length - 1);

  const question = `${a} ${operations[index]} ${b}`;
  let answer;

  switch (index) {
    case (0):
      answer = a + b;
      break;
    case (1):
      answer = a - b;
      break;
    case (2):
      answer = a * b;
      break;
    default:
      break;
  }

  return [question, answer];
};

export default () => engine(taskDescription, getGameData);
