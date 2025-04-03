import TasksListComponent from "../view/task-list-component.js";
import TaskComponent from "../view/task-component.js";
import TaskBoardComponent from "../view/task-board-component.js";
import { render } from "../framework/render.js";
import { Status, StatusLabel } from '../const.js';
import DelBtnComponent from '../view/del-btn-component.js'

export default class TasksBoardPresenter {
    #boardContainer = null;
    #tasksModel = null;

    #tasksBoardComponent = new TaskBoardComponent();

    #boardTasks = [];

    constructor({ boardContainer, tasksModel }) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;
    }

    init() {
        this.#boardTasks = [...this.#tasksModel.getTasks()];

        render(this.#tasksBoardComponent, this.#boardContainer);
        console.log(this.#boardTasks);

        const statuses = Object.values(Status);

        statuses.forEach((status) => {
            const tasksListComponent = new TasksListComponent({
                title: StatusLabel[status], status
            });
            render(tasksListComponent, this.#tasksBoardComponent.getElement());
            
            this.#boardTasks.forEach((task) => {
                // Добавляем задачи в соответствующие секции
                if (task.status == status) {
                     const taskComponent = new TaskComponent({ task: task });
    
                    // Рендерим каждую задачу в список
                    render(taskComponent, tasksListComponent.getElement());
                }
            })

            if (status == Status.TRASH) {
                const delBtn = new DelBtnComponent();
                render(delBtn, tasksListComponent.getElement())
            }
        });
        
    }
}    