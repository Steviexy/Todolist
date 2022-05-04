 form = document.querySelector("form");
 form.addEventListener("submit", handleSubmitForm);


 function handleSubmitForm(e) {
     e.preventDefault();
     let input = document.getElementById("todo");
     if (input.value !== "") {
     addTodo(input.value);
     }
     input.value="";
 }

 function addTodo(todo) {
     let ul = document.getElementById("todo-list");
     let li = document.createElement("li");
     let done = document.createElement("input");
     done.setAttribute("type", "checkbox");
     done.setAttribute("class", "check");
     let checkBtn = document.createElement("button");
     checkBtn.setAttribute("class", "delete");
     checkBtn.innerText = "X";
     li.innerText = document.getElementById("todo").value;
     li.appendChild(checkBtn);
     li.appendChild(done);
     ul.appendChild(li);
    checkBtn.addEventListener("click", function(e) {
        this.parentNode.remove();
    })
}




