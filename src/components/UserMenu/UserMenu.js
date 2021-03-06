import React from 'react'
import { ButtonLogOut } from '../../Views/Button.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getUserName } from '../../redux/auth/auth-selectors'
import { logOut } from '../../redux/auth/auth-operation'
import defaultAvatar from './user.png';
import { FiLogOut } from 'react-icons/fi'
import { SiFossa } from 'react-icons/si'


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
  const name = useSelector(getUserName)
  // const email = useSelector(getUserEmail);
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <SiFossa/>
      <img src={avatar} alt="" width="30" style={styles.avatar} />

      <span style={styles.name}> Добро пожаловать { name } </span>
      <ButtonLogOut
        type="submit"
        onClick={() => dispatch(logOut())}
      >
        <FiLogOut size={20}/>
      </ButtonLogOut>
    </div>
  )
}