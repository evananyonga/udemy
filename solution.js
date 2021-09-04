arrToDestroy = [15, 8, 7, 10, 9, 2, 4, 17, 4, 4, 6, 11, 1]

// Function that prints contents of an array in reverse
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse(arrToDestroy)

// Function that returns true or false if the elements of an array are identical or not
// with a for loop
function isUniform(ele) {
  var first = ele[0];
  for (var i = 1; i < ele.length; i++) {
    if (ele[i] !== first) {
      return false;
    }
  }
  return true;
}
// isUniform([4,5,7,89,3,6])

// or using the every function
/* function isUniform(ele) {
  return ele === arrToDestroy[0]
}
console.log(arrToDestroy.every(isUniform))

isUniform(arrToDestroy)
*/


// Funtion that returns the sum of numbers in an array
function sumArray(arr) {
  sum = 0;
  for (let num of arr) {
    new_sum = sum += num
  }
  console.log(new_sum);
}
sumArray(arrToDestroy)

/* or using the forEach
function sumArray(arr) {
  let count = 0;
  arr.forEach(function(ele) {
    count += ele;
  })
  return count
}
*/

// function that finds the biggest number in an array
function max(arr) {
  let maxim = arr[0]
  for (var num = 1; num < arr.length; num++) {
    if (arr[num] > maxim) {
      // console.log(num);
      maxim = arr[num]
    }
  }
  return maxim
}

// writing some version of forEach
function myForEach(myarray, func) {
  // loop over an array
  for (var i = 0; i < myarray.length; i++) {
    // evoke a function on your forEach
    // func();

    // or make the function hold items
    func(myarray[i]);
  }
}

// convert myForEach into a regular forEach
/*
Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}
var someArray = ["an", "array", "of", "strings]";

// call an inbuilt function over in
someArray.myForEach(alert);

// or call an anonymous function
someArray.myForEach(function(item) {
  console.log("I am " + item);
})
*/
