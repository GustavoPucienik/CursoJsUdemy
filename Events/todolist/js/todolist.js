;(function(){
    'use strict'

    //Armazenar o dom em variaveis

    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = document.getElementsByTagName("li")

    let arrTasks = getSavedData()

/*     function addEventLi(li){
        li.addEventListener("click", function () {
            console.log(this)
        })
    } */
    
    function getSavedData (){
        let tasksData = localStorage.getItem("tasks")
        tasksData = JSON.parse(tasksData)

        return tasksData && tasksData.length ? tasksData : [
            {
                name: "task 1",
                createAt: Date.now(),
                completed: false
            },
            {
                name: "task 2",
                createAt: Date.now(),
                completed: false
            }
        ]

        
    }
    function setNewDate(){
        return localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewDate()

    function generateLiTask(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editBtn = document.createElement("i")
        const deleteBtn = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editBtn.className = "fas fa-edit"
        editBtn.setAttribute("data-action", "editButton")
        li.appendChild(editBtn)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type","text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.name

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)

        //deleteBtn.className = "fas fa-trash-alt"
        deleteBtn.classList.add("fas","fa-trash-alt")
        deleteBtn.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteBtn)

        ul.appendChild(li)

        /* addEventLi(li) */

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
        setNewDate()
    }

    function clickedUl(e){
        const dataAction = e.target.getAttribute("data-action")
        if(!dataAction) return

        let currentLi = e.target
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        /* if(e.target.className === "fas fa-edit"){
        if(e.target.classList.contains("fa-edit")){
            if(e.target.getAttribute("data-action") === "editBtn")
                console.log("é edit")
        
        }}

        switch(e.target.getAttribute("data-action")){
            case "EditBtn" :
                console.log("Edit btn pelo switch")
                break
            default:
                console.log("Não é edit")
        }
 */
        
        const actions = {
            editButton: function(){
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach( container => {
                    container.removeAttribute("style")
                })

                editContainer.style.display = "flex";
            },
            deleteButton: function(){
                arrTasks.splice(currentLiIndex, 1)
                console.log(arrTasks)
                renderTasks()
                //currentLi.remove()
                //currentLi.parentElement.removeChild(currentLi)

                setNewDate()
            },
            containerEditButton: function(){
                const val = currentLi.querySelector(".editInput").value
                arrTasks[currentLiIndex].name = val
                renderTasks()
                setNewDate()
            },
            containerCancelButton: function(){
                currentLi.querySelector(".editContainer").removeAttribute("style")

                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
            },
            checkButton: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed

                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                } else{
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }
                setNewDate()
                renderTasks()
            }
        }
        if(actions[dataAction]){
            actions[dataAction]()
        }


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

    ul.addEventListener("click", clickedUl)

    

    renderTasks();

})()