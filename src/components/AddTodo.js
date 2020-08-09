import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  // 보통 react에서 form을 제출할 때는 그 form 문서에다가 state를 따로 줘서 쉽게 관리한다고 함
  state = {
    whatyoutype: "",
  };
  typing = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitting = (e) => {
    e.preventDefault();
    this.props.addSomething(this.state.whatyoutype);
    this.setState({ whatyoutype: "" });
  };
  render() {
    return (
      // 당연히 부모 요소에서 미리 flex를 줘야 자식들의 flex 10과 1이 먹힌다
      //   onsubmit logic 틀림. props로 올리는 거는 이거 속에 있는 거였음
      <form style={{ display: "flex" }} onSubmit={this.submitting}>
        <input
          type="text"
          name="whatyoutype"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.whatyoutype}
          onChange={this.typing}
        ></input>
        <input type="submit" value="Submit" style={{ flex: "1" }}></input>
      </form>
    );
  }
}
AddTodo.propTypes = {
  addSomething: PropTypes.func.isRequired,
};
export default AddTodo;
