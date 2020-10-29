const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector('#newTaskForm');

var taskHtml

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    $('#newTaskModal').modal("hide");

    const taskNameIn = document.querySelector('#taskNameIn');
    const taskDetailsIn = document.querySelector('#taskDetailsIn');
    //const nameShort = document.querySelector('#assigneeFirst[0]', '.', '#assigneeSecond[0]' );
    const nameFirst = document.querySelector('#nameFirst');
    const nameSecond = document.querySelector('#nameSecond');
    const dueDateIn = document.querySelector('#dueDateIn');
    const statusSelect = document.querySelector('#statusSelect');
    console.log(statusSelect)
    /*
        Validation code here
    */

    const taskName = taskNameIn.value;
    const taskDetails = taskDetailsIn.value;
    const assignee1 = nameFirst.value[0];
    const assignee2 = nameSecond.value[0];
    const dueDate = dueDateIn.value;
    const status = statusSelect.value
    const assignee = assignee1 + assignee2;
    console.log(assignee)

    taskManager.addTask(taskName, taskDetails, assignee, dueDate, status);

    // Render the tasks
    taskManager.render();

    taskNameIn.value = '';
    taskDetailsIn.value = '';
    nameFirst.value = '';
    nameSecond.value = '';
    dueDateIn.value = '';
    statusSelect.value = '';
});

const taskCard = document.querySelector(#taskCard)