import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppSection } from './App.styled';

export default function App() {
  const contacts = useSelector(getContacts);

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
        {contacts.length === 0 && <p>There is no contacts</p>}
      </Section>
    </AppSection>
  );
}
