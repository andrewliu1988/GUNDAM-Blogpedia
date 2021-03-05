import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'


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
      const res = await axios.get(`${BASE_URL}/api/suit/${suitId}`)
      this.setState({suitDetails: res.data.suit})
    } catch (error){
      throw error
    }
  }

  publishNewComment = async (newComment) => {   
    try {
      const res = await axios.post(`${BASE_URL}/api/comment`,newComment )
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState(() => ({[target.name]: target.value}) 
    )
    this.updateSubmitted()
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    const newComment = {    
      name: this.state.name,
      comment: this.state.comment,
      media_url: this.state.mediaUrl
    }
    this.publishNewComment(newComment)
    this.setState({
      submitted: true,
      author: '',
      comment: '',
      mediaUrl: ''
    })  
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
  }



  render() {
    const suitInfo = this.state.suitDetails
    return (
      <div className="container" >
        <h1 className="header">SUIT DETAILS</h1>
          <section className="suitGrid">
            <img src={suitInfo.media_url} alt="media" className="suitMedia"/>
            <section className="suitDetails">
              <h1 className="model">Model: {suitInfo.model}</h1>
              <br/>
              <p className="weapons">Weapons: {suitInfo.weapons}</p>
              <br/>
              <p className="description">{suitInfo.description}</p>
            </section>
          </section>

          <form className="form" onSubmit={this.handleSubmit}>

            <input
            name="name"
            type="text"
            placeholder="NAME"
            value={this.state.name}
            onChange={this.handleChange}
            maxLength="144"
            className='form-author'
            />

            <textarea 
            name="comment"
            type="text"
            placeholder="WRITE A COMMENT"
            value={this.state.comment}
            onChange={this.handleChange}
            maxLength="144"
            className="form-text"
            />

            <input
            name="mediaUrl" 
            type="url"
            placeholder="SHARE A FAVORITE IMAGE, OR GIF "
            value={this.state.mediaUrl}
            onChange={this.handleChange}
            className="form-url"
            />

            <button className="custom-btn">SUBMIT</button>

            {this.state.submitted && (
                <button className="create-btn1">
                  <NavLink className="view-btn" to="/comment">
                    VIEW ALL COMMENTS
                  </NavLink>
                </button>)}
          </form>
      </div>
    )
  }
  
}