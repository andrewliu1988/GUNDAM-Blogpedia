import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'


export default class PilotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      submitted: false,
      name: '',
      age: '',
      mecha:'',
      image: '',
      description:''
    }
  }

  
  createPilot = async (newPilot) => {
    const pilotId = this.props.match.params.id
    try{
      const res = await axios.post(`${BASE_URL}/show/${pilotId}/pilot`, newPilot)
    } catch (error){
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
    const newPilot = {    
      name: this.state.name,
      age: this.state.age,
      mecha:this.state.mecha,
      media_url: this.state.image,
      description: this.state.description
    }
    this.createPilot(newPilot)
    this.setState({
      submitted: true,
      name: '',
      age: '',
      mehca: '',
      image: '',
      description: ''
    })  
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
  }



  render() {
    
    return (
      <div className="container">
        <h1 className="header">CREATE PILOT</h1>
          <form className="create-form" onSubmit={this.handleSubmit}>

            <input
              name="name"
              type="text"
              placeholder="NAME"
              value={this.state.name}
              onChange={this.handleChange}
              maxLength="144"
              className='create-author'
            />

            <input 
              name="age"
              type="text"
              placeholder="AGE"
              value={this.state.age}
              onChange={this.handleChange}
              maxLength="144"
              className="create-author"
            />

            <input
              name="mecha"
              type="text"
              placeholder="PILOTED MOBILE SUITS"
              value={this.state.mecha}
              onChange={this.handleChange}
              maxLength="500"
              className="create-author"
            />

            <textarea 
              name="description"
              type="text"
              placeholder="PILOT DESCRIPTION"
              value={this.state.description}
              onChange={this.handleChange}
              className="create-text"
            />

            <input
              name="image" 
              type="url"
              placeholder="SHARE A FAVORITE IMAGE, OR GIF"
              value={this.state.image}
              onChange={this.handleChange}
              className="create-url"
            />

            <button className="create-btn"> SUBMIT </button>
              {this.state.submitted && (
                <button className="custom-btn">
                  <NavLink className="view-btn" to="/">
                    VIEW ALL SERIES
                  </NavLink>
                </button>)}
          </form>

          
      </div>
    )
  }
  
}