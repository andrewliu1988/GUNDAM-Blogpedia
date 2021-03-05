import React, { Component } from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default class SuitCard extends Component {

  constructor() {
    super()
    this.state= {
      deleted: false
    }
}

deleteSuit = async () => {
 try{
    const res = await axios.delete(`${BASE_URL}/suit/delete/${this.props.suitId}`)   
    console.log(res.data)
    this.setState( { deleted: true} ) 
  }catch (error) {
    throw error
  }
}
  render() {
    const {model, mediaUrl, onClick} = this.props 
    return (
      <div>
        {!this.state.deleted ?
          <div className="suitCard" onClick={onClick}>
            <h3>{model}</h3>
            <img src={mediaUrl} alt="gif" className="suitIcon"></img>
            <button
              onClick={this.deleteSuit}
              className="delete-btn"> 
              </button>       
         
          </div>  : null }
      </div>
    )
  }
}