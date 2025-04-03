import HeaderComponent from './view/header-component.js';
//import FormAddTaskComponent from './view/form-add-task-component.js'
import NewTaskComponent from './view/task-item-component.js';
import TaskBoardPresenter from './presenter/tasks-board-presenter.js'
import { render, RenderPosition } from './framework/render.js';
import TasksModel from './model/tasks-model.js';


const appContainer = document.getElementById('app');
render(new HeaderComponent(), appContainer, RenderPosition.BEFOREEND);

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
appContainer.appendChild(mainContainer);

render(new NewTaskComponent(), mainContainer);

//const taskBoardComponent = new TaskBoardComponent();
//render(taskBoardComponent, mainContainer);

const tasksModel = new TasksModel();
const taskBoardPresenter = new TaskBoardPresenter({
  boardContainer: mainContainer,
  tasksModel: tasksModel,
});

//render(new FormAddTaskComponent(), formContainer);

taskBoardPresenter.init();

/*const appContainer = document.getElementById('app');
render(new HeaderComponent(), appContainer, RenderPosition.BEFOREEND);

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
appContainer.appendChild(mainContainer);

render(new NewTaskComponent(), mainContainer);

const taskBoardComponent = new TaskBoardComponent();
render(taskBoardComponent, mainContainer);

// создаём блоки для задач по статусам
Object.values(Status).forEach(status => {
  const taskListComponent = new TaskListComponent({ title: StatusLabel[status] });
  render(taskListComponent, taskBoardComponent.getElement());
  
  // здесь добавляем задачи для каждого статуса (имитация добавления задач)
  for (let j = 0; j < 4; j++) {
    const task = {
      title: `Задача ${status} ${j + 1}`,
      status: status
    };
    render(new TaskComponent({ task }), taskListComponent.getElement());
  }
});*/

