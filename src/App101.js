import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>ANA VEGANA</h1>
//       <Button onClick={() => console.log("click")}>Send</Button>
//     </div>
//   );
// };
class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("DidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentUpdate", prevState, prevProps);
  }

  componentWillUnmount() {
    console.log("componentUnmount", this.state, this.props);
  }

  render() {
    console.log("rendering Button method");
    return (
      <button
        onClick={() => {
          this.setState({ prop: 1 });
        }}
      >
        {" "}
        Send
      </button>
    );
  }
}
class App extends Component {
  state = {
    value: 1,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>VEG-ANA</h1>
        {this.state.value === 1 ? (
          <Button text="Constructor example value" />
        ) : null}
        <button onClick={() => this.setState({ value: 0 })}>Send</button>
      </div>
    );
  }
}

export default App;
