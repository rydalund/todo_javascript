let todoId = 1;
let todoTitle = "";
let todoStatus = false;
let todos = [];
let bool = false;
let btnAddTodo = document.getElementById("btnAddTodo");
let btnShowTodos = document.getElementById("btnShowTodos");

btnAddTodo.addEventListener("click", submitTodo);
btnShowTodos.addEventListener("click", showTodos);

class Todo {
    constructor(todoTitle) {
        this.todoId = todoId++;
        this.todoTitle = todoTitle;
        this.todoStatus = todoStatus;
    }
  
    set status(status) {
        this.todoStatus = status;
      }
}

function addTodo(todoTitle) {
    let foo = new Todo(todoTitle);
    todos.push(foo);
}

function submitTodo(){
    let foo = document.getElementById("todoTitle").value;
    if (foo.length > 0){
        addTodo(foo);
        placeForTodos.innerHTML = null;
        showTodos();
        document.getElementById("registerTodo").reset();
        if (!bool){
            addTodoOptions();
        }
    }
}

function showStatus(todoStatus){
    let statusText = String;

    if (todoStatus){
        statusText = 'Competed';
    } else {
        statusText = 'Pending';
    }
    return statusText;
}

function showTodos(){
    let placeForTodos = document.getElementById("placeForTodos");
    placeForTodos.innerHTML = null;
    for (let i = 0; i < todos.length; i++) {
        placeForTodos.innerHTML += "Id: " + todos[i].todoId + ", Title: " + todos[i].todoTitle + ", Status: " + showStatus(todos[i].todoStatus) + "<br>";
    };
}

function addTodoOptions(){
    let foo = document.getElementById("showTodos");
    let div = document.createElement("div");
    div.id ="completed";
    let h2 = document.createElement("h2");
    h2.textContent = "Completed a task?";
    let form = document.createElement("form");
    form.id = "compeleTodo";
    let label = document.createElement("label");
    label.for = "Id";
    label.textContent = "Choose Id of completed todo";
    let input = document.createElement("input");
    input.type = "number";
    input.id = "completedId";
    input.min = "1";
    let button = document.createElement("button");
    button.textContent = "Mark as done :)";
    button.id = "btnCompletedTodo";
    foo.parentNode.appendChild(div);
    div.appendChild(h2);
    h2.parentNode.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.parentNode.appendChild(button);
    document.getElementById("btnCompletedTodo").addEventListener("click", completeTodo);
    bool=true;
}

function completeTodo(){
    if (bool){
        let completedId = document.getElementById("completedId").value;
        console.log(completedId);
        if (completedId >= 1 && completedId <= todos.length){
            todos[completedId-1].status = true;
        }
    }
    document.getElementById("compeleTodo").reset();
    showTodos()
}