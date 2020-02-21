import readlineSync from 'readline-sync';
import greetings from './index.js';

export default (taskDescription, getGameData) => {
  const name = greetings();

  console.log(taskDescription);

  for (let i = 0; i < 3;) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');

      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      i = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
