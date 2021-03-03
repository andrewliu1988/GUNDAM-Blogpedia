import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default class PilotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      PilotDetails: {}
    }
  }

  componentDidMount(){
    this.getPilotDetails()
  }
  
  getPilotDetails = async () => {
    const pilotId = this.props.match.params.id
    console.log(pilotId)
    try{
      const res = await axios.get(`${BASE_URL}/pilot/find/${pilotId}`)
      console.log(res, "andrew")
      this.setState({suitDetails: res.data.pilots})
    } catch (error){
      throw error
    }
  }


  render() {
    const pilotInfo = this.state.suitDetails
    return (
      <div >
        <h1>Pilot Details</h1>
        <section className="suitGrid">
        <img src={pilotInfo.media_url} alt="media" className="suitMedia"/>
        <h1 className="name">Name: {pilotInfo.name}</h1>
        <p className="age">Age: {pilotInfo.age}</p>
        <p className="description">{pilotInfo.description}</p>
        </section>
      </div>
    )
  }
  
}