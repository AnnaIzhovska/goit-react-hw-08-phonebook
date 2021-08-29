import React from 'react'
import { TextField } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/auth-operation'
import { Button } from './Button.styles'

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
          placeholder='Anna'
          autoComplete='all'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          margin="dense"
          size="medium"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-basic"
          label="Mail"
          variant="outlined"
          autoComplete='all'
          placeholder='Annam@gmail.com'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Email должен собержать @'
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
           error={password.length < 1 || password.length > 6 ? false : true}
          helperText={
            password.length < 1 || password.length > 6
              ? ''
              : 'need more symbols'
          }
          id="outlined-basic"
          label="Password"
          variant="outlined"
          placeholder='Mns8921'
          autoComplete='all'
          title="Пароль может состоять из букв и цыфр. Не менее 6 символов"
          margin="dense"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Button type="submit"
          style={styles.button}
          disabled={ !name || !email || !password }>
          Sing Up
        </Button>
      </form>
    </div>
  )
}