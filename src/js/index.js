// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");
var TodoController = require("./controllers/TodoController.jsx");

// - -------------------------------------------------------------------- - //
// - module

var element = React.createElement(TodoController,{});

window.onload = function() {
  React.render(element,document.body);
};

// - -------------------------------------------------------------------- - //
