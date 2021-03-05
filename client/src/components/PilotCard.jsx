import React, { Component } from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default class PilotCard extends Component {
  constructor() {
    super()
    this.state= {
      deleted: false
    }
}

deletePilot = async () => {
 try{
    const res = await axios.delete(`${BASE_URL}/pilot/delete/${this.props.pilotId}`)   
    this.setState( { deleted: true} ) 
  }catch (error) {
    throw error
  }
}
  render() {
    const {name, mediaUrl, onClick} = this.props 
    return (
      <div>
        {!this.state.deleted ?
        <div className="pilotCard" onClick={onClick}>
          <h3 >{name}</h3>
          <img src={mediaUrl} alt="gif"className="suitIcon"></img>
          <button
              onClick={this.deletePilot}
              className="delete-btn">      
          </button> 
        </div> : null }
      </div>
    )
  }
}