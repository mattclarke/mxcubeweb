import React from 'react';
import './motor.css';

export default class PhaseInput extends React.Component {

  constructor(props) {
    super(props);
    this.sendPhase = this.sendPhase.bind(this);
  }

  sendPhase(event) {
    this.props.sendPhase(event.target.value);
  }

  render() {
    return (
      <select
        className="form-control input-sm"
        onChange={this.sendPhase}
        value={this.props.phase}
      >
        {this.props.phaseList.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
           </option>
          )
        )}
      </select>
      );
  }
}
