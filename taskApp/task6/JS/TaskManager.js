// Create the HTML for a task
/*const createTaskHtml = (taskName, taskDetails, assignee, dueDate, status) => `

    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`;
*/
const createTaskHtml = (taskName, taskDetails, assignee, dueDate, status) => `
    <li>
        <div class="container-fluid"; id="accordion">
            <div class="card" id="taskCard">
                <div class="card-header" id="headingOne">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <h5 class="mb-0">${taskName}</h5>
                    </button>
                    <h5>${assignee}</h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        ${taskDetails}
                    </div>
                    <div>
                        ${dueDate}
                    </div>
                    <div>
                        ${status}
                    </div>
                    <div class="form-check">
                        <input class="form-check-input done-button" type="checkbox" value="">
                        <label class="form-check-label" for="defaultCheck1">Mark as Done</label>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(taskName, taskDetails, assignee, dueDate, status) {
        const task = {
            id: this.currentId++,
            taskName: taskName,
            taskDetails: taskDetails,
            assignee: assignee,
            dueDate: dueDate,
            status: status,
        };

        this.tasks.push(task);
    }

    // Create the render method
    render() {
        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.taskName, task.taskDetails, task.assignee, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const inProgressList = document.querySelector('#inProgressList');
        inProgressList.innerHTML = tasksHtml;
    }
}