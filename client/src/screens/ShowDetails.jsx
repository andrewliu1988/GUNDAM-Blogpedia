import axios from 'axios'
import React, {Component} from 'react'
import { BASE_URL } from '../globals'
import SuitCard from '../components/SuitCard'



export default class ShowDetails extends Component {
  constructor(props){
    super(props) 
      this.state = {
        allSuits: [],
        allPilots: [],
        seriesId: ''
      } 
    }

    componentDidMount() {
      this.getAllSuits()
    }

    getAllSuits = async() => {
      let showId = this.props.match.params.show_id
      try{
        const res = await axios.get(`${BASE_URL}/suit/find/${showId}`)
        this.setState({ allSuits: res.data.suit})
        this.setState ({ seriesId: showId})
      } catch (error) {
        throw error
      }
      
    }
  
  render(){
  return (
    <div>
      <h1>show details</h1>
      <div className="showDetails">
      {this.state.allSuits.map((result, index) =>
       <SuitCard
        model={result.model}
        mediaUrl={result.media_url}
        onClick={()=> this.props.history.push(`/suit/${result._id}`)}
       />
      )}
      </div>

      <button onClick={() =>this.props.history.push(`/add/${this.state.seriesId}`)}>Add Gundam to Series</button>
    </div>
  )
}
}