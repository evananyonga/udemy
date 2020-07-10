var age = prompt("How old are you");

if (age === "-") {
  alert("Comeon Man, you can't age backwards!!")

} else if (age === 21) {
  alert("happy 21st birthday")

} else if (age%2 == 1) {
  alert("Your age is odd")
} else if (age % Math.sqrt(age*age) === 0) {
  alert("Perfect Square")
} else {
  alert("You're boringly normal")
}