import { createElement } from "../framework/render.js";


function createTaskComponentTemplate(task) {
    const {title, status} = task;
        return (
            `<div class="task-list ${status}">${title}
            </div>
            `);
}

export default class TaskBoardComponent {
    constructor({task}) {
        this.task = task
    }

    getTemplate() {
        return createTaskComponentTemplate(this.task);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}
