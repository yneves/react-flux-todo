// - -------------------------------------------------------------------- - //
// - libs

var TodoFlux = require("../flux/TodoFlux.js");

// - -------------------------------------------------------------------- - //
// - module

var TodoAction = TodoFlux.createAction({
  
  addTask: function(text) {
    return {
      actionType: "TODO_ADD_TASK",
      text: text,
    };
  },
  
  removeTask: function(id) {
    return {
      actionType: "TODO_REMOVE_TASK",
      id: id,
    };
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TodoAction;

// - -------------------------------------------------------------------- - //
