let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        alert("Task added successfully!");
    } else {
        alert("Please enter a valid task!");
    }
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "No tasks available.";
    } else {
        tasks.forEach((task, index) => {
            taskList.innerHTML += `<div>${index + 1}. ${task}</div>`;
        });
    }
}

function removeTask() {
    let taskList = document.getElementById("taskList");
    let taskIndex = prompt("Enter the task number to remove:");

    if (taskIndex !== null && taskIndex !== "") {
        let index = parseInt(taskIndex) - 1;

        if (!isNaN(index) && index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            alert("Task removed successfully!");
        } else {
            alert("Invalid task number!");
        }
    }
}

function quitApp() {
    alert("Quitting Task Application. Goodbye!");
    // Additional cleanup or exit logic can be added here if needed.
}
