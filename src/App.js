import React, { Component } from "react";
import Todos from "./components/Todos";
// import logo from "./logo.svg";
// import { v4 as uuid } from "uuid";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }
  checkBox = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delBtn = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };
  addSomething = (type) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: type,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* 밑에 todos = {}로 써줌으로써 props로 설정이 되고, Todos파일에서 저 state를 쓸 수 있게됨 */}
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addSomething={this.addSomething} />
                  <Todos
                    todos={this.state.todos}
                    checkBox={this.checkBox}
                    delBtn={this.delBtn}
                  />
                </React.Fragment>
              )}
            />

            {/* component는 그냥 만들어 놓은 페이지 render할 때 쓰임, 딱히 안 만들어 놨으면 그냥 render 쓰기*/}
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
