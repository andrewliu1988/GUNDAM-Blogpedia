import React, { Component } from 'react'

export default class PilotCard extends Component {
  render() {
    const {name, mediaUrl, onClick} = this.props 
    return (
      <div className="seriesbox" onClick={onClick}>
        <img src={mediaUrl} alt="gif"className="suitIcon"></img>
        <h1>{name}</h1>

      </div>
    )
  }
}