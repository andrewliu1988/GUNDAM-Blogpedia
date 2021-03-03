import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default class SuitDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      suitDetails: {},
      submitted: false,
      name: '',
      comment: '',
      mediaUrl: '',
      allComment: []
    }
  }

  componentDidMount(){
    this.getSuitDetails()
  }
  
  getSuitDetails = async () => {
    const suitId = this.props.match.params.id
    try{
      const res = await axios.get(`${BASE_URL}/suit/${suitId}`)
      this.setState({suitDetails: res.data.suit})
    } catch (error){
      throw error
    }
  }

  publishNewComment = async () => {
    const newComment = {
      name: this.state.name,
      comment: this.state.comment,
      mediaUrl: this.state.mediaUrl
    }
    try {
      const res = await axios.post(`${BASE_URL}/comment`, newComment)
      console.log(res.data)
      // const res2 = await axios.get(`${BASE_URL}/get/`)
      // this.setState({
      //   allComment: res2.data.comment
      // })
      // return res2.data
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState(() => ({[target.name]: target.value})
      
    )

    console.log('PUBLISHING', this.state)
    this.updateSubmitted()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
      author: '',
      comment: '',
      mediaUrl: ''
    })
    this.publishNewComment()
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
  }



  render() {
    const suitInfo = this.state.suitDetails
    return (
      <div >
        <h1>Suit Details</h1>
          <section className="suitGrid">
            <img src={suitInfo.media_url} alt="media" className="suitMedia"/>
            <h1 className="model">{suitInfo.model}</h1>
            <p className="weapons">{suitInfo.weapons}</p>
            <p className="description">{suitInfo.description}</p>
          </section>


          <form onSubmit={this.handleSubmit}>


            <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            maxLength="144"
            className='name-text'
            />




            <textarea 
            name="comment"
            type="text"
            placeholder="Write a comment!"
            value={this.state.comment}
            onChange={this.handleChange}
            maxLength="144"
            className="form-text"
            />

            <input
            name="mediaUrl" 
            type="url"
            placeholder="Share a favorite "
            value={this.state.mediaUrl}
            onChange={this.handleChange}
            className="url-text"
            />

            <button>sumbit</button>
          </form>
      </div>
    )
  }
  
}