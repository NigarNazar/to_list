const todoForm =document.querySelector("#todoForm");
const todoIn = document.querySelector("#todoIn");
const btn = document.querySelector(".btn");
const todoRef = document.querySelector("#todoRef");
const todoUl = document.querySelector(".todoUl")
const but = document.querySelector(".but")
const cardBody = document.querySelector(".card-body")

eventlistener()


function eventlistener(){
    todoForm.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded" , loadedToUp);
    todoUl.addEventListener("click" , deletTodo);
    todoRef.addEventListener("keyup"  , filtreTodo)
    
   
}

function filtreTodo(e) {
    const value = e.target.value.toLowerCase();
    const liValue = document.querySelectorAll(".todoLi");
   liValue.forEach(listItem => {
    const text = listItem.textContent.toLowerCase()
    if(text.indexOf(value) === -1){
        listItem.setAttribute("style","display : none !important");
    }else{
        listItem.setAttribute("style" , "display :block");
    }

   });
}
function deletTodo(e) {
    if(e.target.className === "fa-solid fa-xmark"){
e.target.parentElement.parentElement.remove()
deletTodoFromStorega(e.target.parentElement.parentElement.textContent)
    };
};

function deletTodoFromStorega(deletTodoTo){
    let todos = getTodoToStorega()
    todos.forEach(function(todo , index) {
        if(todo === deletTodoTo){
todos.splice(index,1)
        }
    localStorage.setItem("todos", JSON.stringify(todos));
    })
}

function loadedToUp(e){
    let todos = getTodoToStorega();
    todos.forEach(function(todo){
     addTodoToUI(todo);
    })
}
function addTodo(e){
    const newTodo = todoIn.value.trim();
    if(newTodo === ""){
        showAlert("danger", "please enter todo");
        
    
       }else{
        addTodoToUI(newTodo);
        addTodoToStorega(newTodo);
        showAlert("success", "completed");
       }
      
     


       e.preventDefault();
       }
    
     function addTodoToUI(newTodo){
        const todoLi = document.createElement("li");
        todoLi.classList = "todoLi"
        const link =document.createElement("a");
        link.href = "#";
        link.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        link.classList ="linked";
        todoLi.appendChild(document.createTextNode(newTodo));
        todoLi.appendChild(link);
        todoUl.appendChild(todoLi);
        todoIn.value = "";
     }

function getTodoToStorega(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

    function addTodoToStorega(newTodo){
     let todos = getTodoToStorega();
     todos.push(newTodo);
     localStorage.setItem("todos",JSON.stringify(todos));
    }
    

function showAlert(type, message){
const alert = document.createElement("div");
alert.className = `alert alert-${type}`;
alert.style.marginTop = "20px"
alert.style.width = "23rem"
alert.textContent = message;
cardBody.appendChild(alert)



setTimeout( () => {
    alert.remove()
},1000);
}




 
