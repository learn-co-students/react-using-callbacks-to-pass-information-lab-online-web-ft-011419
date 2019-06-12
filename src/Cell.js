import React, { Component } from 'react';

export default class Cell extends Component {

  // export the class as default and extend it to the Component

  // create constructor for the Cell class
  constructor(props) {
    super(props)

    // set the state to the props color
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" 
        style = {{backgroundColor: this.state.color}}
        onClick = {this.handleClick}>
      </div>
    )
  }
  
}
