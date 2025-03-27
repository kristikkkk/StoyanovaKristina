import { createElement } from "../framework/render.js";

function createTaskSectionComponentTemplate() {
    return `<section class="tasks-board"></section>`;
}


export default class TaskSectionComponent {
    getTemplate() {
        return createTaskSectionComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}