#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
const initialAnimationDelay = (ms = 2000) => new Promise((r) => {
    setTimeout(r, ms);
});
async function welcomeScreen() { }
chalkAnimation.rainbow('Welcome to the new Board Game Randomizer! \n');
