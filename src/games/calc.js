import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What is the result of the expression?';

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operationIndex = getRandomNum(0, 2);

  let correctAnswer;
  let question = '';

  switch (operationIndex) {
    case (0):
      correctAnswer = a + b;
      question = `${a} + ${b}`;
      break;
    case (1):
      correctAnswer = a - b;
      question = `${a} - ${b}`;
      break;
    case (2):
      correctAnswer = a * b;
      question = `${a} * ${b}`;
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};

export default () => engine(taskDescription, getGameData);
