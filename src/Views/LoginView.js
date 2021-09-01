import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button.styles'
import { HiOutlineLockClosed } from 'react-icons/hi'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
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
    marginTop: 0,
  },
  button: {
    marginTop: 15,
  },
  checkbox: {
    justifyContent: 'center',
    display: 'flex',

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
      <HiOutlineLockClosed size={50} color={'#424549'}/>
      <h1 style={styles.text}>Log in</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Mail"
          placeholder='Annam@gmail.com'
          title='Email должен собержать @'
          variant="outlined"
          autoComplete='all'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-basic"
          label="Password"
          placeholder='Mns8921'
          variant="outlined"
          margin="dense"
          autoComplete='all'
          title="Пароль может состоять из букв и цыфр. Не менее 6 символов"
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
          required
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          style={styles.checkbox}
          />
        <Button type="submit"
          style={styles.button}
          disabled={!email || !password}>
          Sing In
        </Button>
      </form>
    </div>
  )
}