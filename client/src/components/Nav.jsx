import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <NavLink to="/">Series</NavLink>
          <NavLink to="/pilot">All Pilots</NavLink>
          <NavLink to="/suit">All Suits</NavLink>
          <NavLink to='/comment'>All Comment</NavLink>
        </nav>
      </header>
    )
  }
}