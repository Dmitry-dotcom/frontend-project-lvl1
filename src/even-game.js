import readlineSync from 'readline-sync';
import greetings from './index.js';

const name = greetings();
const getRandomNum = () => Math.floor(Math.random() * 100);

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const num = getRandomNum();
    console.log(`Question: ${num}`);

    const isEven = num % 2 === 0;
    const answer = readlineSync.question('Your answer: ');

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');

      i += 1;
    } else if (isEven && answer !== 'yes') {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${name}!`);

      i = 0;
    } else if (!isEven && answer !== 'no') {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${name}!`);

      i = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
