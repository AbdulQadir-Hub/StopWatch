import React, { Component } from "react";
import "./App.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      working: false,
    };
  }

  toggleStopWatch = () => {
    if (this.state.working) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ sec: prevState.sec + 1 }));
      }, 1000);
    }
    this.setState((prevState) => ({ working: !prevState.working }));
  };

  resetStopWatch = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({ sec: 0, working: false });
  };

  render() {
    // const { sec, working } = this.state;

    const hours = Math.floor(this.state.sec / 3600);
    const minutes = Math.floor((this.state.sec % 3600) / 60);
    const seconds = this.state.sec % 60;

    return (
      <div className="stopwatch">
        <h1>Stop-Watch</h1>
        <br />
        <p>
          {hours} : {minutes} : {seconds}
        </p>
        <br />
        <button onClick={this.toggleStopWatch}>
          {this.state.working ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetStopWatch}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
