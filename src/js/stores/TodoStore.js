// - -------------------------------------------------------------------- - //
// - libs

var TodoFlux = require("../flux/TodoFlux.js");

// - -------------------------------------------------------------------- - //
// - module

var taskCollection = [{
  id: 1,
  text: "sadsadsadasd",
},{
  id: 2,
  text: "sadsadsadasd",
}];

var TodoStore = TodoFlux.createStore({
  
  getTasks: function() {
    return taskCollection;
  }
  
});

function addTask(payload) {
  taskCollection.push({
    id: taskCollection.length + 1,
    text: payload.text
  });
  TodoStore.emitChange();
}

function removeTask(payload) {
  var taskIndex;
  taskCollection.forEach(function(task,index) {
    if (task.id === payload.id) {
      taskIndex = index;
    }
  });
  if (taskIndex) {
    taskCollection.splice(taskIndex,1);
    TodoStore.emitChange();
  }
}

TodoStore.register(function(payload) {
  switch (payload.actionType) {
    
    case "TODO_ADD_TASK":
      addTask(payload);
      break;
      
    case "TODO_REMOVE_TASK":
      removeTask(payload);
      break;
      
  }
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TodoStore;

// - -------------------------------------------------------------------- - //
