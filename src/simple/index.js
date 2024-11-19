import React, { Component } from "react";
import "./App.css";

class Simple extends Component {
  state = {
    items: Array.of(this.props.n).map(el => "ok")
  };
  render() {
    return this.state.items.map(el => <button className="simple">{el}</button>);
  }
}

export default Simple;
