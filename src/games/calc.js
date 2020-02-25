import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const index = getRandomNum(0, operations.length - 1);

  const question = `${a} ${operations[index]} ${b}`;
  let correctAnswer;

  switch (index) {
    case (0):
      correctAnswer = a + b;
      break;
    case (1):
      correctAnswer = a - b;
      break;
    case (2):
      correctAnswer = a * b;
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};

export default () => engine(taskDescription, getGameData);
