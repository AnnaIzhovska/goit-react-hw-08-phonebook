import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

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
  span: {
    fontSize: 25,
    color: '#fff',
  },
}

function Navigation () {

  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
<nav>
    <NavLink to='/' exact style={styles.link} activeStyle={styles.activeLink}>
     Home
    </NavLink>
   
      {isLoggedIn &&
        <NavLink
      to='/contacts'
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
      >
        <span style={styles.span}> | </span>
        PhoneBook
        </NavLink>}
</nav>
  )

}

export default Navigation;