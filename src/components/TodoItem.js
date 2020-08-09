import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  genStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.genStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            onChange={this.props.checkBox.bind(this, id)}
          />{" "}
          {title}{" "}
          <button
            style={{
              backgroundColor: "red",
              padding: "5px 9px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "none",
              //   float이거 요새 자주 쓰는데 그냥 가볍게 정렬할 때 아주 유용
              float: "right",
            }}
            onClick={this.props.delBtn.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkBox: PropTypes.object.isRequired,
  delBtn: PropTypes.object.isRequired,
};

export default TodoItem;
