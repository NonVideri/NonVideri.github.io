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
                <Clock isPrecise={this.state.precise}/>
                <button onClick={this.handleClick}>Toggle Precise Mode</button>
            </div>
        )
    }
}