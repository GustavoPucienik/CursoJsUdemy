"use strict";

;

(function () {
  'use strict'; //Armazenar o dom em variaveis

  var itemInput = document.getElementById("item-input");
  var todoAddForm = document.getElementById("todo-add");
  var ul = document.getElementById("todo-list");
  var lis = document.getElementsByTagName("li");
  var arrTasks = [{
    name: "task 1",
    createAt: Date.now(),
    completed: false
  }];
  /*     function addEventLi(li){
          li.addEventListener("click", function () {
              console.log(this)
          })
      } */

  function generateLiTask(obj) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var checkBtn = document.createElement("button");
    var editBtn = document.createElement("i");
    var deleteBtn = document.createElement("i");
    li.className = "todo-item";
    checkBtn.className = "button-check";
    checkBtn.innerHTML = "<i class='fas fa-check displayNone'></i>";
    checkBtn.setAttribute("data-action", "checkButton");
    li.appendChild(checkBtn);
    p.className = "task-name";
    p.textContent = obj.name;
    li.appendChild(p);
    editBtn.className = "fas fa-edit";
    editBtn.setAttribute("data-action", "editButton");
    li.appendChild(editBtn);
    var containerEdit = document.createElement("div");
    containerEdit.className = "editContainer";
    var inputEdit = document.createElement("input");
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "editInput";
    containerEdit.appendChild(inputEdit);
    var containerEditButton = document.createElement("button");
    containerEditButton.className = "editButton";
    containerEditButton.textContent = "Edit";
    containerEditButton.setAttribute("data-action", "containerEditButton");
    containerEdit.appendChild(containerEditButton);
    var containerCancelButton = document.createElement("button");
    containerCancelButton.className = "cancelButton";
    containerCancelButton.textContent = "Cancel";
    containerCancelButton.setAttribute("data-action", "containerCancelButton");
    containerEdit.appendChild(containerCancelButton);
    li.appendChild(containerEdit); //deleteBtn.className = "fas fa-trash-alt"

    deleteBtn.classList.add("fas", "fa-trash-alt");
    deleteBtn.setAttribute("data-action", "deleteButton");
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    /* addEventLi(li) */

    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrTasks.forEach(function (task) {
      ul.appendChild(generateLiTask(task));
    });
  }

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false
    });
  }

  function clickedUl(e) {
    console.log(e.target);
    console.log(e.target.getAttribute("data-action"));
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    /*  ul.innerHTML += `
    <li class="todo-item">
               <p class="task-name">${itemInput.value}</p>
             </li>`   */

    addTask(itemInput.value);
    renderTasks();
    itemInput.value = "";
    itemInput.focus();
  });
  ul.addEventListener("click", clickedUl);
  renderTasks();
})();