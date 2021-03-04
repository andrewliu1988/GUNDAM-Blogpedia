import React, {Component} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default class PilotDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      pilotDetails: {}
    }
  }

  componentDidMount(){
    this.getPilotDetails()
  }
  
  getPilotDetails = async () => {
    const pilotId = this.props.match.params.id
    console.log(pilotId)
    try{
      const res = await axios.get(`${BASE_URL}/pilot/get/${pilotId}`)
      console.log(res, "andrew")
      this.setState({pilotDetails: res.data.pilot})
    } catch (error){
      throw error
    }
  }


  render() {
    const pilotInfo = this.state.pilotDetails
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