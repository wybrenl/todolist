import project from "./project";

export default class projectList {
    constructor() {
        this.projectList = [];
    }

    getProjectList() {
        return this.projectList
    }

    getProject(name) {
        for (let i = 0; i < this.projectList.length; i++) {
            if (this.projectList[i].getName() == name) {
                return this.projectList[i]
            }
        }
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(project) {
        let projectIndex = this.projectList.indexOf(project);
        if (projectIndex !== -1) {
            this.projectList.splice(projectIndex, 1);
        }
    }
}