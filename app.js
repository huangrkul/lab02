'use strict'

var name = prompt('What is your name?');
        alert('Welcome ' + name);
console.log('hello' + name);

confirm('Are you ready?');

var guess = prompt('Guess my age');

if(guess == '26'){
  console.log('you guessed' + guess);
  alert('That is right!')
  console.log('odd you knew that...')
 } else{
     alert("I am sorry " + name + " but thats not correct, I am 26")
   console.log("you guessed wrong");}

   var answer = prompt('Shall we play a game?')
   answer=answer.toLowerCase();
   if(answer=== 'yes' || answer==='y'){
       alert('Exellent, Lets begin');
       console.log('start');
   } else{
       alert('I am sorry ' + name + ' But thats no longer an option')
       console.log('resistance is futile')
   }