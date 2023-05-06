var tasks = [
    "Do laundry",
    "Clean the kitchen",
    "Call Mom",
    "Take out the trash",
    "Go grocery shopping"
  ];
  
  // Function to add a random task to the to-do list
  function addTask() {
    // Get a random task from the array
    var randomIndex = Math.floor(Math.random() * tasks.length);
    var task = tasks[randomIndex];
  
    // Create a new list item element
    var li = document.createElement("li");
    li.textContent = task;
  
    // Add the new list item to the to-do list
    var ul = document.getElementById("todolist");
    ul.appendChild(li);
  }

  function removeTask(){
    var ul = document.getElementById("todolist");
    ul.remove()
  }