import React, { Component } from "react";

class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(props.n).fill("ok")
    };
  }

  componentWillMount() {
    console.time("flex");
  }
  componentDidMount() {
    console.timeEnd("flex");
  }
  render() {
    return this.state.items.map((el, i) => (
      <div key={i} className="flex">
        {el}
        {i}
      </div>
    ));
  }
}

export default Flex;
