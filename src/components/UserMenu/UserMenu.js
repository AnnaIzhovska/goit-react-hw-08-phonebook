 import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername } from '../../redux/auth/auth-selectors'
import { logOut } from '../../redux/auth/auth-operation'
import defaultAvatar from './avatar.jpg';

import { GiBatMask } from 'react-icons/gi'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(getUsername)
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <GiBatMask />
      <img src={avatar} alt="" width="32" style={styles.avatar} />

      <span style={styles.name}>Добро пожаловать, {name}</span>
      <Button
        variant="contained"
        color="primary"
        type="button"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        go out
      </Button>
    </div>
  )
}