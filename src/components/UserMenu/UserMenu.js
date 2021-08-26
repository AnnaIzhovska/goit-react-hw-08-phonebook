import React from 'react'
import { Button } from '../../Views/Button.styled'
import { useDispatch } from 'react-redux'
// import { getUserName } from '../../redux/auth/auth-selectors'
import { logOut } from '../../redux/auth/auth-operation'
import defaultAvatar from './user.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: 'none',
    marginRight: '15px',
    borderRadius: 5,
  },
  name: {
    color: '#dcdcdc',
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch()
  // const name = useSelector(getUserName)
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="30" style={styles.avatar} />

      <span style={styles.name}> Добро пожаловать</span>
      <Button
        type="submit"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  )
}