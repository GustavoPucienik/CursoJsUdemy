"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

;

(function () {
  'use strict'; //Armazenar o dom em variaveis

  var itemInput = document.getElementById("item-input");
  var todoAddForm = document.getElementById("todo-add");
  var ul = document.getElementById("todo-list");
  var lis = document.getElementsByTagName("li");
  var arrTasks = getSavedData();
  /*     function addEventLi(li){
          li.addEventListener("click", function () {
              console.log(this)
          })
      } */

  function getSavedData() {
    var tasksData = localStorage.getItem("tasks");
    tasksData = JSON.parse(tasksData);
    return tasksData.length ? tasksData : [{
      name: "task 1",
      createAt: Date.now(),
      completed: false
    }, {
      name: "task 2",
      createAt: Date.now(),
      completed: false
    }];
  }

  function setNewDate() {
    return localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }

  setNewDate();

  function generateLiTask(obj) {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var checkButton = document.createElement("button");
    var editBtn = document.createElement("i");
    var deleteBtn = document.createElement("i");
    li.className = "todo-item";
    checkButton.className = "button-check";
    checkButton.innerHTML = "<i class=\"fas fa-check ".concat(obj.completed ? "" : "displayNone", "\" data-action=\"checkButton\"></i>");
    checkButton.setAttribute("data-action", "checkButton");
    li.appendChild(checkButton);
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
    inputEdit.value = obj.name;
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
    setNewDate();
  }

  function clickedUl(e) {
    var dataAction = e.target.getAttribute("data-action");
    if (!dataAction) return;
    var currentLi = e.target;

    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }

    var currentLiIndex = _toConsumableArray(lis).indexOf(currentLi);
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


    var actions = {
      editButton: function editButton() {
        var editContainer = currentLi.querySelector(".editContainer");

        _toConsumableArray(ul.querySelectorAll(".editContainer")).forEach(function (container) {
          container.removeAttribute("style");
        });

        editContainer.style.display = "flex";
      },
      deleteButton: function deleteButton() {
        arrTasks.splice(currentLiIndex, 1);
        console.log(arrTasks);
        renderTasks(); //currentLi.remove()
        //currentLi.parentElement.removeChild(currentLi)

        setNewDate();
      },
      containerEditButton: function containerEditButton() {
        var val = currentLi.querySelector(".editInput").value;
        arrTasks[currentLiIndex].name = val;
        renderTasks();
        setNewDate();
      },
      containerCancelButton: function containerCancelButton() {
        currentLi.querySelector(".editContainer").removeAttribute("style");
        currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name;
      },
      checkButton: function checkButton() {
        arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;

        if (arrTasks[currentLiIndex].completed) {
          currentLi.querySelector(".fa-check").classList.remove("displayNone");
        } else {
          currentLi.querySelector(".fa-check").classList.add("displayNone");
        }

        setNewDate();
        renderTasks();
      }
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
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