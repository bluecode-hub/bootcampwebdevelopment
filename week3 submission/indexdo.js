const todoForm = document.getElementById("task-form");
const todoText = document.getElementById("to-do-text");
const todoList = document.getElementById("task-list");

todoForm.addEventListener("submit", event => {
    event.preventDefault();
    addelement();
});

function addelement() {
    const todoInput = todoText.value.trim();
    if (todoInput !== "") {
        const liItem = document.createElement("li");
       


        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskText = document.createElement("span");
           taskText.className = "task-text";
           taskText.textContent = todoInput;
            liItem.appendChild(checkbox);
           liItem.appendChild(taskText);

        checkbox.addEventListener("change",()=>{
            taskText.classList.toggle("checked",checkbox.checked);
        });
        

        const deletebtn=document.createElement("button");
        deletebtn.innerHTML="🗑️";
        deletebtn.className="delete-btn";
        deletebtn.addEventListener("click",()=>{
            liItem.remove();
        });
      
      
       liItem.appendChild(deletebtn);
       todoList.append(liItem);
       todoText.value = "";

    }
}
