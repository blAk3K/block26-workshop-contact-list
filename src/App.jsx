import './App.css'
import {useState, useEffect} from 'react'
import ContactUnorderedList from './components/ContactList';

function App() {
 const [contactList, setContactList] = useState([]);

const API_URL = `https://jsonplaceholder.typicode.com/`

useEffect (() => {
  const getContact = async() => {
    const response = await fetch (`${API_URL}users`);
    const top10ContactList = await response.json();
    // const top10ContactList = jsonObject.results;
    setContactList(top10ContactList);
  }

  getContact();
}, []);


  return (
    <>
     
       <h1>contact list</h1>
       {<h2> <ContactUnorderedList contactList={contactList} title='Name' /> </h2>}
       {<h2> <ContactUnorderedList contactList={contactList} title='email' /> </h2>}
       {<h2> <ContactUnorderedList contactList={contactList} title='phone' /> </h2>}
    </>
  )
}

export default App
