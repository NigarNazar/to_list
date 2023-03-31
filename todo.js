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
   
}

function addTodo(e){
    const newTodo = todoIn.value.trim();
    if(newTodo === ""){
        showAlert("danger", "please enter todo");
        
    
       }else{
        addTodo === newTodo;
        showAlert("success", "completed");
       }
      
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


       e.preventDefault();
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




 
