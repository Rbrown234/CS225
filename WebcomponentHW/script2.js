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
    

    //var li = document.getElementById("li")
    

    var ul = document.getElementById("todolist");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
