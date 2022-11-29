import React, { Component } from 'react'

export default class Options extends Component {

    state = {
        selectedOption: 'None',
    }

    handleChange = ({ target }) => {
        this.setState({
            selectedOption: target.value,
        });
        this.props.parentCallback(target.value);
    }
    
  render() {
    return (
      <>
        <div>
            <span>{this.state.selectedOption}</span>
            <select
                value={this.state.selectedOption}
                onChange={this.handleChange}
            >
                {this.props.options.map(({ value, label }, index) => <option value={value} >{label}</option>)}
            </select>
        </div>
      </>
    )
  }
}
