import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PilotCard from '../components/PilotCard'

export default class AllPilot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPilots: []
    }
  }

  componentDidMount() {
    this.getAllPilots()
  }

  getAllPilots = async() => {
    try {
    const res = await axios.get(`${BASE_URL}/pilot`)
    console.log(res)
    this.setState({ allPilots: res.data.pilots})
  } catch (error) {
    throw error
  }
}

render() {
  console.log(this.state.allPilots)
  return(
    <div >
      <h1>Pilots</h1>
      <div className="seriesbox">
      {this.state.allPilots.map((result, index) =>
       <PilotCard
       key={result._id}
        name={result.name}
        mediaUrl={result.media_url}
        onClick={()=> this.props.history.push(`/pilot/${result._id}`)}
       />
      )}
      </div>
    </div>
  )
}
}