;(function(){
    'use strict'

    //Armazenar o dom em variaveis

    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault()

        ul.innerHTML += `
        <li class="todo-item">
                    <p class="task-name">${itemInput.value}</p>

                </li>`
        itemInput.value = ""
        itemInput.focus()
    })

})()