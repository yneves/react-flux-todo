// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");
var TodoStore = require("../stores/TodoStore.js");
var TaskList = require("../components/TaskList.jsx");

// - -------------------------------------------------------------------- - //
// - module

var TodoController = React.createClass({
  
  mixin: [ TodoStore.createMixin() ],
  
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
      </div>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TodoController;

// - -------------------------------------------------------------------- - //
