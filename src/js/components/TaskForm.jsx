// - -------------------------------------------------------------------- - //
// - libs

var React = require("react");
var TodoAction = require("../actions/TodoAction.js");

// - -------------------------------------------------------------------- - //
// - module

var TaskForm = React.createClass({
  
  getInitialState: function() {
    return {
      text: ""
    };
  },
  
  handleSubmit: function(event) {
    TodoAction.addTask(this.state.text);
    this.setState(this.getInitialState());
    event.preventDefault();
  },
  
  handleChange: function() {
    this.setState({
      text: this.refs.input.getDOMNode().value
    });
  },
  
  render: function() {
    var task = this.props.task;
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <input ref="input" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">OK</button>
      </form>
    );
  },
  
});

// - -------------------------------------------------------------------- - //
// - exports

module.exports = TaskForm;

// - -------------------------------------------------------------------- - //
