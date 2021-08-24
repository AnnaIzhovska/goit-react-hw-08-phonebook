import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Switch } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
// import Container from '@material-ui/core/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import { getError } from './redux/auth/auth-selectors';
import { Loader } from './components/Loader/Loader';
import styles from './index.css'


const HomeView = lazy(() => import('./Views/HomeView'));
const RegisterView = lazy(() => import('./Views/RegisterView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const ContactsView = lazy(() => import('./Views/ContactView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

    useEffect(() => {
    toast.error(error && 'Invalid Authorization &#10060');
  }, [error]);

  return (
    <div style={styles.container}>
      {isFetchingCurrent ? (
        <h2>Make spinner</h2>
      ) : (
          <>
          <AppBar />
               <ToastContainer autoClose={3000} />
          <Switch>
            <Suspense fallback={<Loader/>}>
              <PublicRoute exact path='/'>
                <HomeView />
              </PublicRoute>
              <PublicRoute path='/singup' restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path='/login' restricted redirectTo='/contacts'>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path='/contacts' redirectTo='/login'>
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;