function clearAll() {
  var taskList = document.getElementById('tasklist');
  taskList.innerHTML = '';
}

function addTask() {
  var inputValue = document.getElementById('input').value;
  var listItem = document.createElement('li');
  listItem.className = 'list-group-item';

  var taskText = document.createElement('span');
  taskText.innerText = inputValue;

  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger';
  deleteButton.innerText = 'Delete';
  deleteButton.onclick = function() {
    listItem.remove();
  };

  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  var taskList = document.getElementById('tasklist');
  taskList.appendChild(listItem);

  // Clear the input field
  document.getElementById('input').value = '';
}
