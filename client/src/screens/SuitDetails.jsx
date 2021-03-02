import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default class SuitDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
      suitDetails: {}
    }
  }

  componentDidMount(){
    this.getSuitDetails()
  }
  
  getSuitDetails = async () => {
    const suitId = this.props.match.params.id
    console.log(suitId)
    try{
      const res = await axios.get(`${BASE_URL}/suit/${suitId}`)
      console.log(res, "andrew")
   
    } catch (error){
      throw error
    }
  }


  render() {
    return (
      <div>
        <h1>Suit details</h1>
      </div>
    )
  }
  
}