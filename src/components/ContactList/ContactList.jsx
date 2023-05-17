import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilteredName } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredName);
  const dispatch = useDispatch();

  const contactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handledDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ListOfContacts>
      {contactsList.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {phone}
          </ItemText>
          <DeleteButton onClick={() => handledDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ListOfContacts>
  );
};
