import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  ListOfContacts,
  ListItem,
  ItemText,
  DeleteButton,
} from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getFilteredContacts);

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
