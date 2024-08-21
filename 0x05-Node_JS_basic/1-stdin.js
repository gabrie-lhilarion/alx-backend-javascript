#!/usr/bin/env node

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);

    // End the process gracefully
    console.log('This important software is now closing');
    process.exit();
});
