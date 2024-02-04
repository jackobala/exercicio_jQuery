function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }

    var taskList = document.getElementById('taskList');
    var newTask = document.createElement('li');

    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        toggleTaskCompleted(newTask);
    };

    
    var taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    
    var deleteBtn = document.createElement('span');
    deleteBtn.className = 'material-symbols-outlined deleteBtn';
    deleteBtn.textContent = 'delete';
    deleteBtn.onclick = function() {
        deleteTask(newTask);
    };

    
    newTask.appendChild(checkbox);
    newTask.appendChild(taskTextSpan);
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

    taskInput.value = '';
}

function deleteTask(taskItem) {
    
    taskItem.remove();
}

function toggleTaskCompleted(taskItem) {

    taskItem.classList.toggle('completed');
}
