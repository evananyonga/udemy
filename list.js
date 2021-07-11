window.setTimeout(function() {
  // put all of your JS code from the lecture
  var todos = [""];
  var input = prompt("What would you like to do");

  while (input !== "quit") {
    if (input === "list") {
      listTodos()
    } else if (input === "new") {
      addTodos()
    } else if (input === "delete") {
      deleteTodo()
    }
    input = prompt("What would you like to do")
  }
  console.log("Okay, I give up!");

  function listTodos() {
    todos.forEach((item, index) => {
      console.log(index + ": " + item);
    });
    console.log("********");
  }

  function addTodos() {
    var newInput = prompt("Enter a new todo item")
    todos.push(newInput);
    console.log("Added a todo item");
  }

  function deleteTodo() {
    var indexTodelete = prompt("Enter number of todo you want removed from the list")
    todos.splice(indexTodelete, 1);
    console.log("Removed a todo Item");
  }

}, 500);
