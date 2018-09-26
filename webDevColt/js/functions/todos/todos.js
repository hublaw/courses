var todos= [];
var input = prompt("what would you like to do?");

while(input !== "quit"){
  if(input === "list") {
    todos.forEach(listTodos);
  } else if (input === "new") {
    addTodo();
  } else if(input === "delete"){
    deleteTodo();
  }
  // ask again for new input
  input = prompt("what would you like to do?");
}
//quit
console.log("Ok, see you later!!");

// helper functions
function listTodos(todo, i) {
  console.log("***********");
  console.log(i + ": " + todo);
  console.log("***********");
}

function addTodo() {
  var newToDo = prompt("Enter new todo");
  console.log("Added todo");
  todos.push(newToDo);
}

function deleteTodo() {
  var index = prompt("Please enter index to delete: ");
  todos.splice(index, 1);
  console.log("Deleted todo at index " + index);
}
