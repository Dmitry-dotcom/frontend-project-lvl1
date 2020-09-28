import calcGame from './calc.js';
import evenGame from './even.js';
import gcdGame from './gcd.js';
import primeGame from './prime.js';
import progressionGame from './progression.js';

export default {
  calculation: (name) => calcGame(name),
  progression: (name) => progressionGame(name),
  'even num': (name) => evenGame(name),
  'greater common divisor': (name) => gcdGame(name),
  'prime num': (name) => primeGame(name),
};
