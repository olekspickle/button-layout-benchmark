import React, { Component } from "react";
import logo from "./logo.svg";
import Flex from "./flex";
import Simple from "./simple";
import "./App.css";

class App extends Component {
  render() {
    const n = 1;
    return (
      <div>
        <Flex n={n} />
        <Simple n={n} />
      </div>
    );
  }
}

export default App;
