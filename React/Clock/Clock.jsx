import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // Renders a clock
  render() {
    return (
      <div isPrecise='false'>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  // Starts a clock
  startInterval () {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
    let delay;
    if (this.props.isPrecise === true) {
      delay = 100
    } else {
      delay = 1000
    }
    this.intervalID = setInterval(() => {
    this.setState({ date: new Date() }); }, delay);
  }
  componentDidMount() {
    this.startInterval()
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise ===
    prevProps.isPrecise) {
      return
    }
    clearInterval(this.intervalID);
    this.startInterval()
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}