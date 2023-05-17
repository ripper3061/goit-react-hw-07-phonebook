import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/operations';
import { ContactsForm, AddButton } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContactsName(contacts, name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone }));
    resetContactForm();
  };

  const checkContactsName = (contacts, newContactName) => {
    const normalizedName = newContactName.toLowerCase();
    console.log(contacts);
    return contacts.some(({ name }) => normalizedName === name.toLowerCase());
  };

  const resetContactForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={phoneInputId}>Number</label>
      <input
        type="tel"
        name="phone"
        value={phone}
        id={phoneInputId}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <AddButton type="submit">Add contact</AddButton>
    </ContactsForm>
  );
}
