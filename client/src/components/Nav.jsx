import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <NavLink to="/" className="series-nav">Series</NavLink>
          <NavLink to="/pilot" className="pilot-nav">All Pilots</NavLink>
          <NavLink to="/suit" className="suit-nav">All Suits</NavLink>
          <NavLink to='/comment' className="comment-nav">All Comment</NavLink>
        </nav>
      </header>
    )
  }
}