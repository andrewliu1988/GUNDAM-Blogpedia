import React, { Component } from 'react'

export default class ShowCard extends Component {
  render() {
    const {title, image, onClick, release_date, eps} = this.props 
    return (
      <div className="showCard" onClick={onClick}>
        <img src={image} alt="poster" className="iconImage"></img>
        <h3>{title}</h3>
        <h4>Episode: {eps}</h4>
        <h4>Release Date: <br/> {release_date}</h4>

      </div>
    )
  }
}