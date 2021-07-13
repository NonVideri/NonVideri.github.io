import React, { useState } from 'react';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';

export default function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
