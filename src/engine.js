import readlineSync from 'readline-sync';

export default (taskDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(taskDescription);

  for (let round = 1; round <= 3; round += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = typeof answer === 'number' ? +answer : answer;

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
