import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


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
    console.log(this.props)
    try{
      const res = await axios.post(`${BASE_URL}/show/${suitId}/suit`, newSuit)
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
    const newSuit = {    
      model: this.state.model,
      weapons: this.state.weapons,
      media_url: this.state.image,
      description: this.state.description
    }
    console.log(newSuit)
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
      <div >
        <h1>Suit Details</h1>
          <form className="form" onSubmit={this.handleSubmit}>


            <input
            name="model"
            type="text"
            placeholder="Model #"
            value={this.state.model}
            onChange={this.handleChange}
            maxLength="144"
            className='model-text'
            />




            <textarea 
            name="weapons"
            type="text"
            placeholder="Add Weapons"
            value={this.state.weapons}
            onChange={this.handleChange}
            maxLength="144"
            className="weapon-text"
            />


            <textarea 
            name="description"
            type="text"
            placeholder="Mecha Description"
            value={this.state.description}
            onChange={this.handleChange}
            maxLength="500"
            className="description-text"
            />




            <input
            name="image" 
            type="url"
            placeholder="Share a favorite image "
            value={this.state.image}
            onChange={this.handleChange}
            className="url-text"
            />




            <button>sumbit</button>
          </form>
      </div>
    )
  }
  
}