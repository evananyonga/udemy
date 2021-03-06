// Printing all numbers between -10 and 19

for (let i = -10; i <= 19; i++) {
  console.log(i);
}

// Printing all even numbers between 10 and 40
for (let i = 10; i <= 40; i++) {
  if (i%2 === 0) {
    console.log(i);
  }
}

// Printing all odd numbers between 300 and 333
for (let m = 300; m <= 333; m++) {
  if (m%2 === 1) { // or m % 2 !== 0
    console.log(m);
  }
}

// Printing all common multiples of 5 and 3 between 5 and 50
for (let i = 5; i <= 50; i++) {
  if (i%5 === 0 && i%3 === 0) {
    console.log(i);
  }
}

for (let i = 1; i < 7; i++) {
  if (i === 1) {
    console.log('$');
  }
  else if (i === 2) {
    console.log('$$');
  }
  else if (i === 3) {
    console.log('$$$');
  }
  else if (i === 4) {
    console.log('$$$$');
  }
  else if (i === 5) {
    console.log('$$$$$');
  } else {
    console.log('$$$$$$')
  }
}

for (let j = 1; j < 100; j++) {
  if (j % 5 && j % 3 === 0) {
    console.log('FizzBuzz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else if(j % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(j);
  }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (num = 1; num < numbers.length; num++) {
  if (num%3 === 0) {
    console.log(num);
  }
}
