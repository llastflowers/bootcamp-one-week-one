import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    const userName = prompt("Hi! What's your name?");

    const userConfirmation = confirm('Welcome, ' + userName + '. Do you want to take my quiz?');
    //console.log(myConfirmation);

    const userAnswer1 = prompt('Is Gary my best friend? (Yes/No)');
    const lowercaseUserAnswer1 = userAnswer1.toLowerCase();
    const trimmedLowercaseUserAnswer1 = lowercaseUserAnswer1.trim();

    const userIsCorrect1 = isCorrect(trimmedLowercaseUserAnswer1);

    if (userIsCorrect1) {
        alert("That's right! I hate that guy!");
    } else {
        alert('No way, I hate that guy!');
    }

    const userAnswer2 = prompt("Is my #1 best friend's name Squirtle? (Yes/No)");
    const lowercaseUserAnswer2 = userAnswer2.toLowerCase();
    const trimmedLowercaseUserAnswer2 = lowercaseUserAnswer2.trim();

    const userIsCorrect2 = isCorrect(trimmedLowercaseUserAnswer2);

    if (userIsCorrect2) {
        alert('Yeah, Pikachu is my best friend!');
    } else {
        alert("Hm...nope. It's Pikachu!");
    }

    const userAnswer3 = prompt('Do I ever change my clothes? (Yes/No)');
    const lowercaseUserAnswer3 = userAnswer3.toLowerCase();
    const trimmedLowercaseUserAnswer3 = lowercaseUserAnswer3.trim();

    const userIsCorrect3 = isCorrect(trimmedLowercaseUserAnswer3);

    if (userIsCorrect3) {
        alert("That's right! Why bother?");
    } else {
        alert('Nope, why would I do that?');
    }
    
    const userCompleted = confirm("That's it, " + userName + '. Thanks for taking my quiz!');
};