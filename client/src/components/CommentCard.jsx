import React, { Component } from 'react'
import '../screens/CommentBoard'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default class CommentCard extends Component {
    constructor() {
      super()
      this.state= {
        deleted: false
      }
  }
  
  deleteComment = async () => {
   try{
      const res = await axios.delete(`${BASE_URL}/comment/delete/${this.props.commentId}`)   
      console.log(res.data)
      this.setState( { deleted: true} ) 
    }catch (error) {
      throw error
    }
  }

  render() {
    const {name, comment, image} = this.props
    return (
      <div>
        {!this.state.deleted ?
        
        <div className="commentCard"> 
 
          <section className="commentInfo">
          <h3>{name}</h3>
          <p className="comments">{comment}</p> 
          <button
            onClick={this.deleteComment}
            className="delete-btn">      
          </button>
          <img src={image} alt="gif"className="suitIcon2"></img>     
          </section>

          
        </div> : null}

      </div>

    )
  }
}