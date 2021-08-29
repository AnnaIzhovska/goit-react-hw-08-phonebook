import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './Button.styles'

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

        <Button type="submit"
          style={styles.button}
          disabled={!email || !password}>
          Sing In
        </Button>
      </form>
    </div>
  )
}

// import { useDispatch } from 'react-redux';
// import { logIn } from '../redux/auth/auth-operation'
// import { Form, Input, Label, Error, Button } from './LoginView.styled';
// import * as Yup from 'yup';
// import { useFormik } from "formik";
// import { Form, Label, Input, Button } from "./LoginView.styled";

// function LoginForm() {
//   const dispatch = useDispatch();

//     const formik = useFormik({
//      initialValues: {
//             email: '',
//             password: "",
//      },
//      validationSchema: Yup.object({
//        email: Yup.string().email('Invalid email address').required('Required'),
//        password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
//      }),
//      onSubmit: (values, { setSubmitting, resetForm }) => {
//        dispatch(logIn({ email: values.email, password: values.password})),
//          setSubmitting(false),
//          resetForm()
//      },
//    });
//     const { handleSubmit, handleChange, isSubmitting, values, touched, errors } = formik;
//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>Email
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           onChange={handleChange}
//           value={values.email}
//         />
//         {touched.email && errors.email ? (
//           <>{errors.email}</>
//         ) : null}
//           </Label>
          
//           <Label>Password
//         <Input
//           id="password"
//           name="password"
//           type="password"
//           onChange={handleChange}
//           value={values.password}
//         />
//         {touched.password && errors.password ? (
//           <>{errors.password}</>
//         ) : null}
//       </Label>

//       <Button type="submit" disabled={isSubmitting}>Login</Button>
//     </Form>
//   );
// }

// export default LoginForm;