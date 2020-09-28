import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const mapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameData = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const index = getRandomNum(0, operations.length - 1);
  const operation = operations[index];
  const question = `${a} ${operation} ${b}`;
  const answer = mapping[operation](a, b);

  return [question, String(answer)];
};

export default (name) => engine(name, taskDescription, getGameData);
