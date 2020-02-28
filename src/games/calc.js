import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const index = getRandomNum(0, operations.length - 1);
  const operation = operations[index];

  const question = `${a} ${operation} ${b}`;
  let answer;

  switch (operation) {
    case ('+'):
      answer = a + b;
      break;
    case ('-'):
      answer = a - b;
      break;
    case ('*'):
      answer = a * b;
      break;
    default:
      break;
  }

  return [question, String(answer)];
};

export default () => engine(taskDescription, getGameData);
