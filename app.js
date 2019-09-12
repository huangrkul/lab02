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

   var fear = prompt('Am I afraid of snakes?')
   fear=fear.toLowerCase();
   if(fear==="yes" || fear==="y"){
       alert('Yick, that is correct');
       console.log('This is a sad day for me and therefore the world');
   } else{
       alert('wrong, I hate snake....I HATE EM!!!');
       console.log('They should all be destroyed');
   }

   var reddit = prompt('When does the narwhal bacon?');
   reddit=reddit.toLowerCase();
   if(reddit==="midnight"){
       alert('You have been on the internet a long time I see');
       console.log('rage face of victory');
   } else{
       alert('Nevermind')
       console.log('2011 was a long time ago I guess')
   }

   var rep = 0; 
   while(rep < 4){
       var bat = parseInt(prompt('Since your from the future, what number am I thinking?'));
   if(bat==="69"){

    alert('Woahhhhh, Exellent!');
    console.log('*party on dude*');
   }else if(bat < 69){
       alert('Bogus your too low, try again');
       console.log('alaska');
       rep++;
   
    }else if(bat > 69);{ 
        alert('Totally blew it, you went to far');
        console.log('non-triumphant');
        rep++;
    }

   }
    if (rep===4){
    alert('You failed dude');
    console.log('millitary school');}