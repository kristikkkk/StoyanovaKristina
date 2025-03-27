import { createElement } from "../framework/render.js";

function createAddTaskComponentTemplate() {
    return (`
        <form class="task-form">
            <h2>Новая задача</h2>
            <section class="task-form">
                <input type="text" class="task-input" placeholder="Название задачи...">
                <button type="button" class="task-add-button">
                    Добавить
                </button>
            </section>
        </form>
    `);
}


export default class AddTaskComponent {
    getTemplate() {
        return createAddTaskComponentTemplate();
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