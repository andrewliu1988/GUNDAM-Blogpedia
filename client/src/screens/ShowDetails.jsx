import axios from 'axios'
import React, {Component} from 'react'
import { BASE_URL } from '../globals'
import PilotCard from '../components/PilotCard'


export default class ShowDetails extends Component {
  constructor(props){
    super(props) 
      this.state = {
        allSuits: [],
        allPilots: []
      } 
    }

    componentDidMount() {
      this.getAllSuits()
    }

    getAllSuits = async() => {
      let showId = this.props.match.params.show_id
      try{
        const res = await axios.get(`${BASE_URL}/suit/find/${showId}`)
        console.log(res)
        this.setState({ allSuits: res.data.suit})
      } catch (error) {
        throw error
      }
      
    }
  
  render(){
    console.log(this.props.match.params.show_id)
  return (
    <div>
      <h1>show details</h1>
      {this.state.allSuits.map((result, index) =>
       <PilotCard
        model={result.model}
        mediaUrl={result.media_url}
       />
      )}
    </div>
  )
}
}