import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkstyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkstyle} to="/about">
          About
        </Link>
      </div>
    );
  }
}
const linkstyle = {
  color: "#fff",
  textDecoration: "none",
};
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
export default Header;
