document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", deleteTask);

        const editButton = li.querySelector(".edit-button");
        editButton.addEventListener("click", editTask);

        taskList.appendChild(li);
        taskInput.value = "";
    }

    function deleteTask(event) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }

    function editTask(event) {
        const li = event.target.parentElement;
        const taskSpan = li.querySelector("span");
        const newTaskText = prompt("Edit the task:", taskSpan.textContent);
        if (newTaskText !== null) {
            taskSpan.textContent = newTaskText;
        }
    }
});
