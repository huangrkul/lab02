'use strict'

// var name = prompt('What is your name?');
// alert('Welcome ' + name);
// console.log('hello' + name);

// confirm('Are you ready?');

// var guess = prompt('Guess my age');

// if (guess == '26') {
//     console.log('you guessed' + guess);
//     alert('That is right!')
//     console.log('odd you knew that...')
// } else {
//     alert("I am sorry " + name + " but thats not correct, I am 26")
//     console.log("you guessed wrong");
// }

// var answer = prompt('Shall we play a game?')
// answer = answer.toLowerCase();
// if (answer === 'yes' || answer === 'y') {
//     alert('Exellent, Lets begin');
//     console.log('start');
// } else {
//     alert('I am sorry ' + name + ' But thats no longer an option')
//     console.log('resistance is futile')
// }

// var fear = prompt('Am I afraid of snakes?')
// fear = fear.toLowerCase();
// if (fear === "yes" || fear === "y") {
//     alert('Yick, that is correct');
//     console.log('This is a sad day for me and therefore the world');
// } else {
//     alert('wrong, I hate snake....I HATE EM!!!');
//     console.log('They should all be destroyed');
// }

// var reddit = prompt('When does the narwhal bacon?');
// reddit = reddit.toLowerCase();
// if (reddit === "midnight") {
//     alert('You have been on the internet a long time I see');
//     console.log('rage face of victory');
// } else {
//     alert('Nevermind')
//     console.log('2011 was a long time ago I guess')
// }

// var rep = 0;
// var isCorrect = false;
// // run this loop until a correct answer is given or they run out of turns 
// while (rep < 4 && !isCorrect) {
//     var numAnswer = parseInt(prompt('Since your from the future, what number am I thinking?'));
//     console.log('guess is', numAnswer);

//     // check if the input from the user is not a number.
//     if (!isNaN(numAnswer)) {
//         if (numAnswer === 69) {
//             alert('Woahhhhh, Exellent!');
//             console.log('*party on dude*');
//             isCorrect = true;
//         }
//         else if (numAnswer < 69) {
//             alert('Bogus your too low, try again');
//             console.log('too low');
//             rep++;
//         }
//         else if (numAnswer > 69) {
//             alert('Totally blew it, you went to far');
//             console.log('too high');
//             rep++;
//         }
//     }
//     else {
//         rep++;
//         console.log('you did it wrong');
//         alert('you did not enter a number');
//     }

// }
// if (rep === 4) {
//     alert('You failed dude');
//     console.log('millitary school');
// }

var guessNumber = 0;
var multiple = ['america', 'australia'];
var isCorrect = false;
while (guessNumber <= 5 && !isCorrect) {
    var nation = prompt('I am a citizen of two nations, can you guess which?').toLowerCase(); // france
    for (var i = 0; i < multiple.length; i++) {
        if (nation === multiple[i]) {
            alert('Cricky ya got me mate!');
            console.log('excited gibbering');
            isCorrect = true;
            i = multiple.length;
        }
    }

    if (!isCorrect) {
        if (guessNumber === 5) {
            var countries = '';

            for(var i=0; i < multiple.length; i++){
                countries += multiple[i] + ', ';
            }

            alert('cor your outta guesses mate, I am from  ' + countries);
        }
        else {
            alert('wrong answer try again');
        }
        guessNumber++;
    }

}