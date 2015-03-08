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
        {'#' + task.id + ' ' + task.text}
      </li>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TaskItem;

// - -------------------------------------------------------------------- - //
