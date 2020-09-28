import readlineSync from 'readline-sync';

const roundsCount = 3;

// eslint-disable-next-line consistent-return
const engine = (name, taskDescription, getGameData) => {
  console.log(`Hello, ${name}!`);
  console.log(taskDescription);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!\n`);

      return engine(name, taskDescription, getGameData);
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;
