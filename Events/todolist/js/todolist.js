;(function(){
    'use strict'

    //Armazenar o dom em variaveis

    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = document.getElementsByTagName("li")

    let arrTasks = [
        {
            name: "task 1",
            createAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener("click", function () {
            console.log(this)
        })
    }
    

    function generateLiTask(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkBtn = document.createElement("button")
        const editBtn = document.createElement("i")
        const deleteBtn = document.createElement("i")

        li.className = "todo-item"

        checkBtn.className = "button-check"
        checkBtn.innerHTML = "<i class='fas fa-check displayNone'></i>"

        li.appendChild(checkBtn)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editBtn.className = "fas fa-edit"
        li.appendChild(editBtn)

        //deleteBtn.className = "fas fa-trash-alt"
        deleteBtn.classList.add("fas","fa-trash-alt")
        li.appendChild(deleteBtn)

        ul.appendChild(li)

        addEventLi(li)

        return li
    }

    function renderTasks(){
        
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task))
        });
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault()

         /*  ul.innerHTML += `
        <li class="todo-item">
                    <p class="task-name">${itemInput.value}</p>

                </li>`   */
        addTask(itemInput.value)
        renderTasks()

        itemInput.value = ""
        itemInput.focus()
    });

    

    renderTasks();

})()