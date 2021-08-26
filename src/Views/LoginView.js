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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
          error={password.length < 1 || password.length > 6 ? false : true}
          helperText={
            password.length < 1 || password.length > 6
              ? ''
              : 'need more symbols'
          }
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