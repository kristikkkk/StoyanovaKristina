import { createElement } from '../framework/render.js';

function createDelBtnTemplate() {
  return `<button class="button">Очистить</button>`;
}

export default class DelBtnComponent {
  getTemplate() {
    return createDelBtnTemplate();
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
