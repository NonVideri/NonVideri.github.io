import React from 'react';
import ClockMechanism from './components/ClockMechanism';
import ClockTimezone from './components/ClockTimezone';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { precise: false }
      this.handleClick = this.handleClick.bind(this);
    }
    // Toggle precise mode
    handleClick() {
      let newState = this.state.precise === true ? false : true
      this.setState({ precise: newState })
    }
    render() {
        return (
            <div>
                <span className="card-group">
                  <ClockMechanism className="card" isPrecise={this.state.precise}/>
                  {/* <ClockTimezone className="card" /> */}
                </span>
                <button className="btn btn-primary" onClick={this.handleClick}>Toggle Precise Mode</button>
            </div>
        )
    }
}