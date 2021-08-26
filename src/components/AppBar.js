import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
// import { Button } from '../Views/Button.styled'
import { getIsLoggedIn } from '../redux/auth/auth-selectors'
// import themeActions from 'redux/theme/themeActions';

// const styles = {
//   light: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//     marginBottom: '5px',
//   },
//   dark: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//     backgroundColor: 'rgb(50, 50, 50)',
//     color: 'white',
//     marginBottom: '5px',
//   },
// };

export default function AppBar() {
    // let themeState = 'light';
    // theme ? (themeState = 'light') : (themeState = 'dark');
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <header
            // style={styles[themeState]}
        >

            <Navigation />
            {/* <Button variant="contained" color="primary" onClick={changeTheme}>
                Change theme
            </Button> */}
            { isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}
