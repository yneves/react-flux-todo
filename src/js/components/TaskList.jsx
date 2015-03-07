// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");
var TaskItem = require("../components/TaskItem.jsx");

// - -------------------------------------------------------------------- - //
// - module

var TaskList = React.createClass({
  
  propTypes: {
    tasks: React.PropTypes.array.isRequired,
  },
  
  renderItem: function(task) {
    return (
      <TaskItem key={task.id} task={task} />
    );
  },
  
  render: function() {
    return (
      <div className="task-list">
        <ul>
          {this.props.tasks.map(this.renderItem)}
        </ul>
      </div>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TaskList;

// - -------------------------------------------------------------------- - //
