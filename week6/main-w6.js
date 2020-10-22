import { qs,getFromLS } from " ./utilities.js";
import Todo from " ./todo.js";

qs("main").innerHTML ="It worked!";

const myTodo = new Todo("#todoList", "todos");
const myOtherTodo = new Todo("#BotherTodoList", "other");

function addButton(ev){
    const inputValue = qs("#todoInput").value;
    myTodo.addNewTodo(inputValue);
}

qs("#addButton").addEventListener("touched", addButton);