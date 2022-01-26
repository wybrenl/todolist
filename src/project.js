import task from "./task";

export default class project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskName) {
        for(let i = 0; i< this.tasks.length; i++) {
            if (this.tasks[i].getName()==taskName) {
                this.tasks.splice(i,1);
            }
        }
    }

    countTasks() {
        return this.tasks.length;
    }
}