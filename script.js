document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskList = document.getElementById('taskList');
  
    const li = document.createElement('li');
    li.innerHTML = `${taskInput.value} - ${dateInput.value} 
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">✖</button>`;
  
    taskList.appendChild(li);
  
    taskInput.value = '';
    dateInput.value = '';
  
    li.querySelector('.completeBtn').addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    li.querySelector('.deleteBtn').addEventListener('click', () => {
      taskList.removeChild(li);
    });
  });
  