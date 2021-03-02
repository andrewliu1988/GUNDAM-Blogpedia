import React, { Component } from 'react'

export default class ShowCard extends Component {
  render() {
    const {title, image, onClick} = this.props 
    return (
      <div className="seriesbox" onClick={onClick}>
        <img src={image} alt="poster" className="iconImage"></img>
        <h1>{title}</h1>

      </div>
    )
  }
}