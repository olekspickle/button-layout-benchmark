import React, { Component } from "react";

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(props.n).fill("ok")
    };
  }

  componentWillMount() {
    console.time("simple");
  }
  componentDidMount() {
    console.timeEnd("simple");
  }
  render() {
    console.log(this.props.n, this.state.items);
    return this.state.items.map((el, i) => (
      <div key={i} className="simple">
        {el}
        {i}
      </div>
    ));
  }
}

export default Simple;
