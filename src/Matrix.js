import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  
this.state ={
  selectedcolor:  '#fff'
}
  }

  changeState =(changedColor)=> {this.setState({
    selectedcolor: changedColor
  })
   
}
updated =() =>
  (this.state.selectedcolor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} update={this.updated} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeState} />
        
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
