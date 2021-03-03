import React, { Component } from 'react'

export default class PilotCard extends Component {
  render() {
    const {name, mediaUrl, onClick} = this.props 
    return (
      <div className="pilotCard" onClick={onClick}>
        <img src={mediaUrl} alt="gif"className="suitIcon"></img>
        <h3>{name}</h3>

      </div>
    )
  }
}