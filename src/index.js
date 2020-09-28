import inquirer from 'inquirer';
import runGame from './games/index.js';

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Welcome to the Brain Games!\nPlease, enter your name:',
  },
  {
    type: 'list',
    name: 'game',
    message: 'Choose your game:',
    choices: [
      'Calculation',
      'Even num',
      'Greater common divisor',
      'Prime num',
      'Progression',
    ],
  },
];

export default () => {
  inquirer
    .prompt(questions)
    .then(({ name, game }) => runGame[game.toLowerCase()](name));
};
