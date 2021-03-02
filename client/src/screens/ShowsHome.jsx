import React, { Component } from 'react'
import axios from 'axios'
import ShowCard from '../components/ShowCard'
import { BASE_URL } from '../globals'

export default class ShowsHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allShows: []
    }
  }

  componentDidMount() {
    this.getAllShows()
  }

  getAllShows = async() => {
    try {
    const res = await axios.get(`${BASE_URL}/show`)
    console.log(res)
    this.setState({ allShows: res.data.shows})
  } catch (error) {
    throw error
  }
}

render() {
  console.log(this.state)
  return(
    <div >
      <h1>Series</h1>
      <div className="seriesbox">
      {this.state.allShows.map((result, index ) => (
        <ShowCard
        onClick={()=> this.props.history.push(`/suit/find/${result._id}`)}
        title={result.title}
        image={result.image}
        release_date={result.release_date}
        eps={result.eps}
        />
      ))}
      </div>
    </div>
  )
}
}