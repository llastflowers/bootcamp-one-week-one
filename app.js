import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('Welcome to my quiz!');
    const myConfirmation = confirm('Do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('Is my favorite color red? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

    const userIsCorrect = isCorrect(trimmedLowercaseUserAnswer);

    if (userIsCorrect) {
        alert('Correct!');
    } else {
        alert('Wrong');
    }
};