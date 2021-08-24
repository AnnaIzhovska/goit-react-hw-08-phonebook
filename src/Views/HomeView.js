import React from 'react'
import imgWelcome from '../unnamed.png'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}

const HomeView = () => (
  <div style={styles.container}>
    <img src={imgWelcome} width="500" alt="welcome" />
  </div>
)

export default HomeView