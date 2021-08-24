import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Container from '../components/Container/Container'
import ContactForm from '../components/ContactFrom/ContactForm'
import ContactList from '../components/Contacts/Contacts'
import Filter from '../components/Filter/Filter'
import { selectors }  from '../redux/contacts'


const styles = {
  caption: {
    fontWeight: 'normal',
    fontSize: 32,
}
}

export default function ContactsView(params) {
  const loading = useSelector(selectors.getLoading)
  return (
    <Container title="Phonebook">
      <ToastContainer autoClose={3000} />
      <ContactForm />
      <h2 className={styles.caption}>Contacts</h2>
      <Filter />
      <ContactList />
      {loading && (
        <Loader type="Audio" color="#00BFFF" height={80} width={80} />
      )}
    </Container>
  )
}