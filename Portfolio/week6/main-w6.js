class Todo {

    constructor(parentId, key){
        this.listElement = qs(parentId);
        this.key = key;
        this.todos = getFromLs(this.key); // Should get a list of todos
        if (this.todos == null) {
            this.todos = [];
        }
        this.listTodos();
    }
    addNewTodo(text){
        const newTodo = {
            id: new Date(),
            content: text, 
            completed: false
        };
        this.todos.push(newTodo);
        this.saveTodos();
        // todoInput.value = '';
        this.listTodos();
    }
     //renderTodo(

    //deleteTodo()

    completeTodo(todo) {}
    listTodos() {
        // { id : timestamp, content: string, completed: bool }
        let todoList = "";
        for(let todo of Object.values(this.todos)) {
            todoList += '<li>' + todo.content + '</li>';
        }
        this.listElement.innerHTML = todoList;
    }
    getTodos() {
        return this.todos;
    }
    saveTodos() {
        saveToLs(this.key, this.todos);
    }


 
}


const myTodo = new Todo("#todoList", "todos");

function addButton(ev){
    console.log("clicked")
    const inputValue = qs("#todoInput").value;
    myTodo.addNewTodo(inputValue);
}

qs("#addButton").addEventListener("touched", addButton);
qs("#addButton").addEventListener("click", addButton);

function deleteButton(ev){
    console.log("clicked")
    const inputValue = qs("#todoInput").value;
    myTodo.addNewTodo(inputValue);
}

qs("#deleteButton").addEventListener("touched", deleteButton);
qs("#deleteButton").addEventListener("click", deleteButton);


