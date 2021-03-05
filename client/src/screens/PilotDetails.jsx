import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { NavLink} from 'react-router-dom'


export default class PilotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      pilotDetails: {},
      submitted: false,
      name: '',
      comment: '',
      mediaUrl: '',
      allComment: []
    }
  }

  componentDidMount(){
    this.getPilotDetails()
  }
  
  getPilotDetails = async () => {
    const pilotId = this.props.match.params.id
    try{
      const res = await axios.get(`${BASE_URL}/api/pilot/get/${pilotId}`)
      this.setState({pilotDetails: res.data.pilot})
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
    const pilotInfo = this.state.pilotDetails
    return (
      <div className="container">
        <h1 className="header">PILOT DETAILS</h1>
          <section className="suitGrid">
            
            <img src={pilotInfo.media_url} alt="media" className="suitMedia"/>
            <section className="suitDetails">
                <h1 className="name">Name: {pilotInfo.name}</h1>
                <p className="age">Age: {pilotInfo.age}</p>
                <p className="mecha">Mecha: {pilotInfo.mecha}</p>
                <p className="description">{pilotInfo.description}</p>
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
            placeholder="WRITE A COMMENT!"
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