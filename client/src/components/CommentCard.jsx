import React, { Component } from 'react'

export default class CommentCard extends Component {
  render() {
    const {name, comment, image, onClick} = this.props 
    return (
      <div className="pilotCard">
        <h3>{name}</h3>
        <p>{comment}</p>
        <img src={image} alt="gif"className="suitIcon"></img>

      </div>
    )
  }
}