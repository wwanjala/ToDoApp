"use strict";
const inputElement = document.querySelector("input");
const formElement = document.querySelector("form");
const listElement = document.querySelector("ul");
const totalTasksElement = document.getElementById("total-tasks");

let taskList = [];

function deleteItem(e) {
  let task = e.target.parentElement.previousElementSibling.innerHTML;
  let index = taskList.indexOf(task);
  if (index !== -1) {
    taskList.splice(index, 1);
  }
  populateList();
}

function populateList() {
  listElement.innerHTML = "";
  taskList.forEach(function (item) {
    let newItem = document.createElement("li");

    //Add new span for text
    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

    //Add delete button
    let deleteb = document.createElement("a");
    deleteb.classList.add("delete");
    deleteb.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    newItem.appendChild(deleteb);

    deleteb.addEventListener("click", (e) => deleteItem(e));

    //add li to ul
    listElement.appendChild(newItem);
  });
  totalTasksElement.innerHTML = taskList.length;
  inputElement.value = "";
}

populateList();

function noWhiteSpaces(s){
    const withouthSpace = s.trim();
    return withouthSpace.length > 0;
}

function addTask() {
  if (inputElement.value && noWhiteSpaces(inputElement.value) && !taskList.includes(inputElement.value)) {
    taskList.push(inputElement.value);
    populateList();
  }
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});
