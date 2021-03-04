import React, { Component } from 'react'

export default class ShowCard extends Component {
  render() {
    const {title, image, onClick, release_date, eps} = this.props 
    return (
      <div className="showCard" onClick={onClick}>
        <img src={image} alt="poster" className="iconImage"></img>
        <h3>{title}</h3>
        <p>Episode: {eps}</p>
        <p>Release Date: <br/> {release_date}</p>

      </div>
    )
  }
}