document.getElementById('addTaskBtn').addEventListener('click', function () {

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();


    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding
    }

});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });


    taskItem.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);




}