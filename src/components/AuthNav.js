import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontSize: 25,
    fontWeight: 350,
    color: '#DCDCDC',
  },
  activeLink: {
    color: '#87CEFA',
    fontSize: 28,
    fontWeight: 600,
  },
}

  
export default function AuthNav() {
  return (
    <div>
      <NavLink
        to='/singup'
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Sing up
      </NavLink>
      |
      <NavLink
        to='/login'
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  )
}
