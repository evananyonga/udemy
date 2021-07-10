window.setTimeout(function() {
  // put all of your JS code from the lecture
  var todos = [];
  var input = prompt("What would you like to do");

  while (input !== "quit") {
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      var newInput = prompt("Enter a new todo item")
      todos.push(newInput);
    }
    input = prompt("What would you like to do")
  }
  console.log("Okay, I give up!");
}, 500);
