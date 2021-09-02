arrToDestroy = [15, 8, 7, 10, 9, 2, 4, 17, 4, 4, 6, 11, 1]

function printReverse(arr) {
  arr.reverse()
  console.log(arr);
}

printReverse(arrToDestroy)

function isUniform(ele) {
  return ele === arrToDestroy[0]
}
console.log(arrToDestroy.every(isUniform))

isUniform(arrToDestroy)
