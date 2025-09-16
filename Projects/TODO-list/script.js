
class Task {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.listElement = document.getElementById("task-list");
  }

  addTask(text) {
    const task = new Task(text);
    this.tasks.push(task);
    this.render();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.render();
  }

  toggleTask(index) {
    this.tasks[index].toggle();
    this.render();
  }

  render() {
    this.listElement.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button onclick="taskManager.toggleTask(${index})">✓</button>
          <button onclick="taskManager.removeTask(${index})">🗑</button>
        </div>
      `;

      this.listElement.appendChild(li);
    });
  }
}

const taskManager = new TaskManager();

document.getElementById("add-btn").addEventListener("click", () => {
  const input = document.getElementById("task-input");
  const text = input.value.trim();
  if (text !== "") {
    taskManager.addTask(text);
    input.value = "";
  }
});
