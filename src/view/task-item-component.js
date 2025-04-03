import { createElement } from '../framework/render.js';

function createNewTaskComponentTemplate() {
  return (
    `<div class="task-container">
      <div class="task-header">Новая задача</div>
      <div class="input-group">
        <input type="text" class="task-input" placeholder="Новая задача...">
        <button class="add-button">+ Добавить</button>
      </div>
    </div>`
  );
}

export default class NewTaskComponent {
  getTemplate() {
    return createNewTaskComponentTemplate();
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
