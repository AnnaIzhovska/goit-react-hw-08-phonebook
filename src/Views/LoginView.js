import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button.styled'

import { TextField } from '@material-ui/core'
import { logIn } from '../redux/auth/auth-operation'

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
   text: {
        color: '#424549',
  },
  button: {
    marginTop: 15,
  }
}

export default function LoginView() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Log in</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Mail"
          variant="outlined"
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit"
        style={styles.button}>
          To come in
        </Button>
      </form>
    </div>
  )
}