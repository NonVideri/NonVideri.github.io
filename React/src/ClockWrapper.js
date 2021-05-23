import React from 'react';
import Clock from './Clock';

export default class ClockWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { precise: false }
      this.handleClick = this.handleClick.bind(this);
    }
    // Toggle precise mode
    handleClick() {
      let newState =  this.state.precise === true ? false : true
      this.setState({ precise: newState })
    }
    render() {
        return (
            <div>
                <span className="card"><Clock className="appline" isPrecise={this.state.precise}/></span>
                <button className="btn btn-primary" onClick={this.handleClick}>Toggle Precise Mode</button>
            </div>
        )
    }
}