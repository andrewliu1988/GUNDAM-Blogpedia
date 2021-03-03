import React, { Component } from 'react'

export default class CommentCard extends Component {
  render() {
    const {name, comment, image, onClick, commentid} = this.props 
    return (
      <div className="commentCard">
        <h3>{name}</h3>
        <p maxlength="144">{comment}</p>
        <img src={image} alt="gif"className="suitIcon"></img>
        <br/>
        <br/>
        <button 
          commentid={commentid}
          onClick={onClick} 
          className="delete-btn">delete        
        </button>

      </div>
    )
  }
}