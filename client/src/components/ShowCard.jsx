import React, { Component } from 'react'

export default class ShowCard extends Component {
  render() {
    const {title, image} = this.props 
    return (
      <div className="seriesbox">
        <p>{image}</p>
        <h1>{title}</h1>

      </div>
    )
  }
}