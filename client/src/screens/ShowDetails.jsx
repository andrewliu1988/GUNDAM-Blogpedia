import axios from 'axios'
import React, {Component} from 'react'
import { BASE_URL } from '../globals'
import SuitCard from '../components/SuitCard'
import PilotCard from '../components/PilotCard'



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
      this.getAllPilots()
      
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

    getAllPilots = async () => {
      let showId = this.props.match.params.show_id
      try{
        const res = await axios.get(`${BASE_URL}/pilot/find/${showId}`)
        this.setState({ allPilots: res.data.pilot})
        console.log(res)
       }catch (error) {
         throw error
       }
    }


    // updateSuits= async () => {
    //   let showId = this.props.match
    //   try{
    //     const res = await axios.put(`${BASE_URL}/suit/update/:id`)
    //     const req = {
    //       model: req.body. model,
    //     }
    //   }catch (error) {
    //     throw error
    //   }
      
    // }
  
  render(){
  return (
    <div className="container">
      <section className="button-area">
      <button onClick={() =>this.props.history.push(`/add/suit/${this.state.seriesId}`)} className="add-btn">Add Gundam to Series</button>
      <h1 >show details</h1> 
      <button onClick={() =>this.props.history.push(`/add/pilot/${this.state.seriesId}`)} className="add-btn">Add Pilot to Series</button>
      </section>
      <div className="showDetails">
      {this.state.allSuits.map((result, index) =>
        <SuitCard
          key={result._id}
          model={result.model}
          mediaUrl={result.media_url}
          onClick={()=> this.props.history.push(`/suit/${result._id}`)}
        />
        )}
        <div className="showDetails2">
          {this.state.allPilots.map((result, index)=>
          <PilotCard
            key={result._id}
            mediaUrl={result.media_url}
            name={result.name}
            onClick={()=> this.props.history.push(`/find/${result._id}`)}
          />)}
        </div>
      </div> 

     
    </div>
  )
}
}