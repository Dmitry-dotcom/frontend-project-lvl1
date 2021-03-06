import getRandomNum from '../utility/randomNum.js';
import engine from '../engine.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getGameData = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default (name) => engine(name, taskDescription, getGameData);
