import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkBox={this.props.checkBox}
        delBtn={this.props.delBtn}
      />
    ));
  }
}

// 얘는 한마디로 이 문서에서의 prop을 적어주면 됨. prop 없으면 안 써도 되고
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  checkBox: PropTypes.object.isRequired,
  delBtn: PropTypes.object.isRequired,
};
export default Todos;
