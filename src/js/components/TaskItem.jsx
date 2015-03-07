// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");

// - -------------------------------------------------------------------- - //
// - module

var TaskItem = React.createClass({
  
  propTypes: {
    task: React.PropTypes.object.isRequired,
  },
  
  render: function() {
    var task = this.props.task;
    return (
      <li className="task-item">
        <strong>{'#' + task.id }</strong>
        <span>{task.text}</span>
      </li>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TaskItem;

// - -------------------------------------------------------------------- - //
