import task from "./task";
import project from "./project"
import projectList from "./projectList";
import Icon from './del.png';
import './style.css';

let listOfProjects = new projectList();

function addProject(name) {
    let proj = new project(name);
    listOfProjects.addProject(proj);

    let element = addProjectName(name);
    document.getElementById('projectList').appendChild(element);

    element.addEventListener('click', setActive());
    element.click();
        
    let del = addDeleteButton(name)
    element.appendChild(del);

    return listOfProjects
}

function addProjectName(projectName) {
    let element = document.createElement('li');
    element.textContent = projectName;
    element.classList.add('project');
    element.id = projectName;

    return element;
}

function setActive() {
    let listOfProjects = document.getElementsByClassName('project');

    for (var i = 0; i < listOfProjects.length; i++) {
        listOfProjects[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
      
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          // Add the active class to the current/clicked button
          this.className += " active";
          
          // Display tasks for the active project
          displayTasks();
        });
    }
}

function addTask(name) {
    let todo = new task(name);
    let activeProject = listOfProjects.getProject(document.getElementsByClassName('project active')[0].id);
    activeProject.addTask(todo);    
    displayTasks();
}

function displayTasks() {
    document.getElementById('tasks').innerHTML = "";

    let activeProject = listOfProjects.getProject(document.getElementsByClassName('project active')[0].id);
    let tasks = activeProject.getTasks();

    for (let i = 0; i < tasks.length; i++) {
        let taskName = tasks[i].getName();
        let task = addTaskName(taskName);
        let deleteTask = addDeleteButton(taskName);
        let calendar = addCalendar(taskName);

        document.getElementById('tasks').appendChild(task);
        task.appendChild(calendar);
        task.appendChild(deleteTask);
    }
};

function addTaskName(taskName) {
    let task = document.createElement('li');
    task.textContent = taskName;
    task.classList.add('task');
    task.id = taskName;

    return task;
}

function addDeleteButton(taskName) {
    let del = document.createElement('span');
    let delButton = new Image();
    delButton.src = Icon;
    delButton.classList.add('delButton');
    del.appendChild(delButton);
    delButton.id = taskName;

    delButton.addEventListener('click', function(event) {
        let task = event.target;
        task.parentNode.parentNode.remove();
        listOfProjects.getProject(document.getElementsByClassName('project active')[0].id).removeTask(task.id);
    })

    return del;
};

function addCalendar(name) {
    let calendar = document.createElement('input')
    calendar.setAttribute('type', 'date');
    calendar.classList.add('calendar')
    calendar.id = name;

    return calendar
}

addProject('Unassigned tasks');
document.getElementById('addProjectButton').addEventListener('click', function() {addProject(prompt("What is the name of your project?"))});
document.getElementById('addTaskButton').addEventListener('click', function() {addTask(prompt("What is the name of your task?"))});