import React, { Component } from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'
import CommentCard from '../components/CommentCard'

export default class CommentBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allComment: []
    }
  }

  componentDidMount(){
    this.getAllComment()
  }

  getAllComment = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/Comment/get`)
      this.setState({allComment: res.data.comment})
    } catch (error) {
      throw error
    }
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        {this.state.allComment.map ((result, index) => (
          <CommentCard 
            key={result._id}
            name={result.name}
            comment={result.comment}
            image={result.media_url}
            commentId={result._id}
          />
        ))}
      </div>
    )
  }
}

