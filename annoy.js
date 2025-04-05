// Version One
/* 
let answer = prompt('Are we there yet?');

while (answer !== 'Yes') {
  answer = prompt('Are we there yet?');
}

alert('YAY! We made it.');
*/

// Version two
let answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1) {
  answer = prompt('Are we there yet?');
}

alert('YAY! We made it.');
