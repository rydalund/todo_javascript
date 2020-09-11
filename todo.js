let todoId = 1;
let todoTitle = "";
let todoStatus = false;
let todos = [];
let showTodo = document.createElement("p");
let btnAddTodo = document.getElementById("btnAddTodo");
let btnShowTodos = document.getElementById("btnShowTodos");
let btnDeleteTodo= document.getElementById("btnDeleteTodo");

btnAddTodo.addEventListener("click", submitTodo);
btnShowTodos.addEventListener("click", showTodos);
btnDeleteTodo.addEventListener("click", deleteTodo);

function Todo(todoId, todoTitle, todoStatus){
    this.todoId = todoId++;
    this.todoTitle = todoTitle;
    this.todoStatus = todoStatus;
}

function addTodo(event) {
    let foo = new Todo(Todo);
    todos.push(foo);
}

function submitTodo(){
    let foo = document.getElementById("todoTitle");
    addTodo(foo);
    showTodo();
}

function showStatus(todoStatus){
    let foo = statusText 
    if (todoStatus){
        foo = 'Competed';
    } else {
        foo = 'Pending';
    }
    return foo;
}

function showTodos(){
    showTodo.innerHTML = null;
    for (let i = 0; i < todos.length; i++) {
        showTodo.innerHTML += "Id: " + todos[i].todoId + "Title: " + todos[i.todoTitle] + "Status: " + todos[i].todoStatus.showStatus;
    }
    divTasks.appendChild(displayedTodos);
}

function deleteTodo(){
    let foo = document.getElementById('delete');
    todos.splice((foo.todoId--), 1);
}
