import task from "./task";
import taskList from "./project";
import userInterface from "./userInterface";
import './style.css';

//create general content
let content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);

content.appendChild(makeHeader());
content.appendChild(makeMain());
content.appendChild(makeFooter());

//create header 
function makeHeader() {
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Todo list";

    return header;
}

//create main part
function makeMain() {
    let main = document.createElement('div');
    main.classList.add('div');
    main.appendChild(makeSidebar());
    main.appendChild(makeToDoList());

    return main;
}

//create side bar
function makeSidebar() {
    let sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');

    let sideBarTitle = document.createElement('p');
    sideBarTitle.textContent = 'Projects';
    sideBar.appendChild(sideBarTitle);

    let projectList = document.createElement('ul');
    sideBar.appendChild(projectList);

    let node = document.createElement('li');
    node.textContent = "Unassigned to do's";
    projectList.appendChild(node);

    let addProject = document.createElement('button');
    addProject.textContent = 'Add new project';
    sideBar.appendChild(addProject);

    return sideBar;
}

//create to do list
function makeToDoList() {
    let toDos = document.createElement('div');
    toDos.classList.add('toDos');
    toDos.textContent = "To do's";

    return toDos;
}

//create footer
function makeFooter() {
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = "© Henkie B productions";

    return footer;
}

/*
let unassigned = new taskList('unassigned');

let vacuum = new task('vacuum', "tomorrow", "yes honey");
let dweil = new task('dweil', "tomorrow", "yes honey");


unassigned.addTask(dweil);
unassigned.addTask(vacuum);
console.log(unassigned.getTasks());

//unassigned.removeTask(vacuum);
console.log(unassigned.getTasks());

let kpmg = new taskList('KPMG');

kpmg.addTask(dweil);
console.log(kpmg.getTasks());

vacuum.setStatus();
console.log(vacuum.getStatus());
*/