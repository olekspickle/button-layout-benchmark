import React, { Component } from "react";
import "./App.css";

class Flex extends Component {
  state = {
    items: Array.of(this.props.n).map(el => "ok")
  };

  render() {
    return this.state.items.map(el => <div className="flex">{el}</div>);
  }
}

export default Flex;
