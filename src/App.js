import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isTextVisible: false,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="button-container">
            <button
              className="decrement-button"
              onClick={() => this.setState({ counter: this.state.counter - 1 })}
            >
              -
            </button>
            {this.state.isTextVisible ? (
              <div className="counter-text">{this.state.counter}</div>
            ) : null}
            <button
              className="increment-button"
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
            >
              +
            </button>
            <button
              onClick={() =>
                this.setState((state) => ({
                  isTextVisible: !state.isTextVisible,
                }))
              }
            >
              Toggle Text
            </button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
