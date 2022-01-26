export default class task {
    constructor (name, date, description = "", priority = false, completed = false) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
    };

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDate() {
        return this.date
    }

    setDate(date) {
        this.date = date;
    }

    getDescription() {
        return this.description
    }

    setDescription(description) {
        this.description = description;
    }

    getPriority() {
        return this.priority
    }

    setPriority() {
        this.priority = !this.priority;
    }

    getStatus() {
        return this.completed
    }

    setStatus() {
        this.completed = !this.completed;
    }
};



