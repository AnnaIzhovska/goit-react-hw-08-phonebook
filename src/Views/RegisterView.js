import React from 'react'
import { TextField } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/auth-operation'
import { Button} from './Button.styled'

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

}

export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    dispatch(register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Sing up</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          size="medium"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

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

        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}