// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");
var TodoStore = require("../stores/TodoStore.js");

var TaskList = require("../components/TaskList.jsx");
var TaskForm = require("../components/TaskForm.jsx");

// - -------------------------------------------------------------------- - //
// - module

var TodoController = React.createClass({
  
  mixins: [ TodoStore.createMixin() ],
  
  getInitialState: function() {
    return {
      tasks: TodoStore.getTasks(),
    };
  },
  
  storeDidChange: function() {
    this.setState({
      tasks: TodoStore.getTasks(),
    });
  },
  
  render: function() {
    return (
      <div className="todo">
        <TaskList tasks={this.state.tasks} />
        <TaskForm />
      </div>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TodoController;

// - -------------------------------------------------------------------- - //
