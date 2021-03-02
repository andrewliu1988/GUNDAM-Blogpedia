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
      this.setState({suitDetails: res.data.suit})
    } catch (error){
      throw error
    }
  }


  render() {
    const suitInfo = this.state.suitDetails
    return (
      <div >
        <h1>Suit Details</h1>
        <section className="suitGrid">
        <img src={suitInfo.media_url} alt="media" className="suitMedia"/>
        <h1 className="model">{suitInfo.model}</h1>
        <p className="weapons">{suitInfo.weapons}</p>
        <p className="description">{suitInfo.description}</p>
        </section>
      </div>
    )
  }
  
}