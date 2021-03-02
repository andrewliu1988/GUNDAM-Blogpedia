import React, { Component } from 'react'
import axios from 'axios'
import ShowCard from '../components/ShowCard'
import Globals, { BASE_URL } from '../globals'

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
    <div>
      {this.state.allShows.map((result, index ) => (
        <ShowCard
        title={result.title}
        image={result.image}
        />

      ))}

    </div>
  )
}
}