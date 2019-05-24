import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let color = () => {this.props.changeColor(str)}

      return <div onClick={color} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
 //
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
   
      </div>
    )
  }
  
}
