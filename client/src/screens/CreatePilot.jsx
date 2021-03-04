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
    console.log(this.props)
    try{
      const res = await axios.post(`${BASE_URL}/show/${pilotId}/pilot`, newPilot)
      console.log(res)
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
    console.log(newPilot)
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
      <div >
        <h1>Create Pilot</h1>
          <form className="create-form" onSubmit={this.handleSubmit}>


            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              maxLength="144"
              className='create-author'
            />




            <input 
              name="age"
              type="text"
              placeholder="Add age"
              value={this.state.age}
              onChange={this.handleChange}
              maxLength="144"
              className="create-author"
            />

            <textarea
              name="mecha"
              type="text"
              placeholder="Piloted Mobile Suits"
              value={this.state.mecha}
              onChange={this.handleChange}
              maxLength="500"
              className="create-text"
            />


            <textarea 
              name="description"
              type="text"
              placeholder="Mecha Description"
              value={this.state.description}
              onChange={this.handleChange}
              className="create-author"
            />




            <input
              name="image" 
              type="url"
              placeholder="Share A Favorite IMG or GIF "
              value={this.state.image}
              onChange={this.handleChange}
              className="create-url"
            />




            <button className="create-btn"> Submit </button>

              {this.state.submitted && (
                <button className="custom-btn view-post">
                  <NavLink className="view-btn" to="/">
                    View All Series
                  </NavLink>
                </button>)}
          </form>


          
      </div>
    )
  }
  
}