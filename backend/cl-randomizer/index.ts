#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

let mode;

const initialAnimationDelay = (ms = 2000) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

async function welcomeScreen() {
  const welcomeAnimation = chalkAnimation.rainbow('Welcome to the new Board Game Randomizer! \n');

  await initialAnimationDelay();
  welcomeAnimation.stop();

  console.log(`
  ${chalk.bgGreen('HOW TO USE')}
  1. Set the action type.
  2. Import the card list.
  3. Profit!
  `);
}

await welcomeScreen();

async function setMode() {
  const options = await inquirer.prompt({
    name: 'mainMode',
    type: 'list', // can also be "input"
    message: 'What mode would you like to use?',
    default() {
      return 'dice';
    }
  });

  mode = options.mainMode;
}

await setMode();
