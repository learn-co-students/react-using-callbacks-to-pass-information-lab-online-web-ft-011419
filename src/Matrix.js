import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
// create the constructor for the class
  constructor() {
    super()
    this.state = {
      // set the state to an object called selectedColor which is set to an  HTML color value of white '#FFFF 
      selectedColor: '#FFF'
    }
  }

  //  create a function called setSelectedColor that will change the value of the state using setState
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  // create a function to capture the color when clicked look to file ColorSelector for event function
  getSelectedColor = () => (
    this.state.selectedColor
  )

  
  // iterate over the values and their index position.  Look to Cell.js for utilization. 
  // we created rows with the colors available to us, and added a onClick with getSelectedColor again //  look to Cell.js for how it is done.
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />)
  )
  
  // generate rows Matrix that will be used to change the state of color
  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

    // render and return the array of usable colors
  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor = {this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
