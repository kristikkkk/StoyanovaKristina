import HeaderComponent from "./view/header-component.js";
import TaskFormComponent from "./view/task-form-component.js";
import TaskBoardComponent from "./view/task-board-component.js";
import TaskListComponent from "./view/task-list-component.js";
import TaskItemComponent from "./view/task-item-component.js";
import { render, RenderPosition } from "./framework/render.js";

//основные контейнеры
const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".task-form"); // добавления задачи
const taskBoardContainer = document.querySelector(".tasks-board"); //  доск задач

//заголовк
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

// форма доб задач
render(new TaskFormComponent(), formContainer);

// созд доску задач
const taskBoardComponent = new TaskBoardComponent();
render(taskBoardComponent, taskBoardContainer);

const taskBoardElement = taskBoardComponent.getElement();

for (let i = 0; i < 4; i++) {
  const listComponent = new TaskListComponent();
  render(listComponent, taskBoardElement);

  const listElement = listComponent.getElement();


  for (let j = 0; j < 2; j++) {
    render(new TaskItemComponent(), listElement);
  }
}

