import { createElement } from "../framework/render.js";

/* бэклог в процессее   */
function createTaskComponentTemplate({ title, status }) {
    return ` 
        <div class="row">
            <span class="task-title ${status}">${title}</span>
        </div>
    `;
}

export default class TaskListComponent {
    constructor({ title, status }) {
        this._title = title;
        this._status = status;
        this._element = null;
    }

    getTemplate() {
        return createTaskComponentTemplate({ 
            title: this._title,
            status: this._status,
        });
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
