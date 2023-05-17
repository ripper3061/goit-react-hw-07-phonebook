import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { AppSection } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppSection>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
        {!isLoading && contacts.length === 0 && <p>There is no contacts</p>}
        <Loader />
      </Section>
    </AppSection>
  );
}
