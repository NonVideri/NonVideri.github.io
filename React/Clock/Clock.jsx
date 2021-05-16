import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // Render clock
  render() {
    return (
      <div isPrecise='false'>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  // Start clock
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
  // Clock starts when mounted
  componentDidMount() {
    this.startInterval()
  }
  // Component reloads after mode change
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise ===
    prevProps.isPrecise) {
      return
    }
    clearInterval(this.intervalID);
    this.startInterval()
  }
  // Clear clock when unmounted to save resources
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}