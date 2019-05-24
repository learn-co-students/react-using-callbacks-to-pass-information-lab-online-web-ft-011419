import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
 updatedState = ()=>{
  this.setState({
  color: this.props.update()
  })}
  render() {
    return (
      <div onClick ={this.updatedState} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
