import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'


export default class SuitDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      submitted: false,
      model: '',
      weapons: '',
      image: '',
      description:''
    }
  }

  
  createSuit = async (newSuit) => {
    const suitId = this.props.match.params.id
    try{
      const res = await axios.post(`${BASE_URL}/api/show/${suitId}/suit`, newSuit)
    } catch (error){
      throw error()
    }
  }

  

  handleChange = ({ target }) => {
    this.setState(() => ({[target.name]: target.value}) 
    )
    this.updateSubmitted()
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    const newSuit = {    
      model: this.state.model,
      weapons: this.state.weapons,
      media_url: this.state.image,
      description: this.state.description
    }
    this.createSuit(newSuit)
    this.setState({
      submitted: true,
      model: '',
      weapons: '',
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
      <div  className="container" >
        <h1 className="header">CREATE SUIT</h1>
          <form className="create-form" onSubmit={this.handleSubmit}>

            <input
              name="model"
              type="text"
              placeholder="MODEL #"
              value={this.state.model}
              onChange={this.handleChange}
              maxLength="144"
              className='create-author'
            />

            <textarea 
              name="weapons"
              type="text"
              placeholder="ADD WEAPONS"
              value={this.state.weapons}
              onChange={this.handleChange}
              maxLength="500"
              className="create-text"
            />

            <textarea 
              name="description"
              type="text"
              placeholder="MECHA DESCRIPTION"
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

            <button className="create-btn">SUBMIT</button>
            {this.state.submitted && (
                <button className="create-btn">
                  <NavLink className="view-btn" to="/">
                    View All Series
                  </NavLink>
                </button>)}
          </form>
      </div>
    )
  }
  
}