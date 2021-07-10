function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
isEven(4);

function factorial(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i
  }
  return result
}
factorial(4)


function KebabToSnake(kebabcased) {
  return kebabcased.replace(/-/g, '_')
}

KebabToSnake('hello-world');


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(0)
}

capitalize('huge')


function test(x) {
  return x*2;
  console.log(x);
  return x/2; 
}

test(40);