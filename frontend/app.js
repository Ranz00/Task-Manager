const API = "http://localhost:8000/api/tasks";
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();
  list.innerHTML = "";
  tasks.forEach(t => renderTask(t));
}

function renderTask(task) {
  const li = document.createElement("li");
  li.className = "flex justify-between items-center border p-2 rounded";
  li.innerHTML = `
    <span class="${task.completed ? 'line-through text-gray-500' : ''}">
      ${task.title}
    </span>
    <div class="space-x-2">
      <button onclick="toggleTask(${task.id}, ${task.completed})" class="text-green-600">✔</button>
      <button onclick="deleteTask(${task.id})" class="text-red-600">✖</button>
    </div>
  `;
  list.appendChild(li);
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  await fetch(API, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({title})
  });
  input.value = "";
  loadTasks();
});

async function toggleTask(id, completed) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({completed: !completed})
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, {method:"DELETE"});
  loadTasks();
}

loadTasks();
