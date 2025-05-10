import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import mockedData from '../../mockedData/contacts.json';
import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : mockedData;
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error saving contacts to localStorage:', error);
    }
  }, [contacts]);

  const addContact = (contact, { resetForm }) => {
    const id = nanoid();
    const contactObj = { id, ...contact };

    setContacts(prevContacts => [...prevContacts, contactObj]);
    resetForm();
  };

  const handleDeleteAction = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleSearch = ev => {
    setSearchValue(ev.target.value.toLowerCase());
  };

  const foundContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );
  };

  return (
    <>
      <div className={styles.appContent}>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={addContact} />
        <SearchBox onSearchChange={handleSearch} />
        <ContactList data={foundContacts()} onDelete={handleDeleteAction} />
      </div>
    </>
  );
}

export default App;
