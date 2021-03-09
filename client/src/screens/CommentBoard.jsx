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
      const res = await axios.get(`${BASE_URL}/api/comment/get`)
      this.setState({allComment: res.data.comment})
      console.log(res, 'first axios')
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(allComment, 'after render')
    return (
      <div className="container">
        <h1 className="header">COMMENTS</h1>
          <div className="comment-container">
            {this.state.allComment.length ? this.state.allComment.map ((result, index) => (
              <CommentCard 
                key={result._id}
                name={result.name}
                comment={result.comment}
                image={result.media_url}
                commentId={result._id}
              />
            )):<h3>loading</h3>}
          </div>
      </div>
    )
  }
}

