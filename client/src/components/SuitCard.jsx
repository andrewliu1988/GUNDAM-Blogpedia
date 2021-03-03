import React, { Component } from 'react'

export default class SuitCard extends Component {
  render() {
    const {model, mediaUrl, onClick} = this.props 
    return (
      <div className="suitCard" onClick={onClick}>
        <img src={mediaUrl} alt="gif" className="suitIcon"></img>
        <h3>{model}</h3>

      </div>
    )
  }
}