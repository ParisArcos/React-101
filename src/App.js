import { Component } from "react";

class Input extends Component {
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}

class App extends Component {
  state = {
    name: "",
    surname: "",
  };

  //? this is a prop not a method
  updateValues = (prop, value) => {
    //? using dynamic prop generation
    this.setState({ [prop]: value });
  };

  updateName = (value) => {
    this.updateValues("name", value);
  };

  render() {
    return (
      <p>
        <p>{`${this.state.name} ${this.state.surname}`}</p>
        <h1>Name</h1>
        <Input
          value={this.state.name}
          onChange={(e) => this.updateName(e.target.value)}
        />
        <Input
          value={this.state.surname}
          onChange={(e) => this.updateValues("surname", e.target.value)}
        />
      </p>
    );
  }
}

export default App;
