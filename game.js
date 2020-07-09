// create a secretNumber
let secretNumber = 4;

// ask user to guess number
guessNumber = Number(prompt('Guess a Number'));

// check if the guess is right
if(guessNumber === secretNumber) {
  alert('You got it Right!');
}
else if(guessNumber < secretNumber) {
  alert('Too low. Guess again');
}
else {
  alert('Too high. Guess again');
}

// Print numbers (-9, -8, -7, .... 17, 18)
let num = -9;

// State condition for the number to be true and print it out
while (num < 19) {
  console.log(num);
  num++;
}


// Print all even numbers between 10 and 40
let n = 10;

// State condition for the number to be true and print it out
while (n < 40) {
  console.log(n);
  n += 2;
}
// Print all odd numbers between 300 and 333
let odd = 300;

// State condition for the number to be true and print it out
while (odd < 333) {
  if (odd % 2 === 1) {
    console.log(odd);
  }
  odd++;
}
