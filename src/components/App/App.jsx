import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import {
  Container,
  Title,
  Head,
  FormContainer,
  LeftContainer,
} from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const oldContact = this.state.contacts.map(oldContact =>
      oldContact.name.toLowerCase()
    );

    if (oldContact.includes(data.name.toLowerCase())) {
      return Notiflix.Notify.failure(`${data.name} is alredy in contacts`);
    }

    const newContact = { id: nanoid(2), ...data };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    Notiflix.Notify.success(`${data.name} contact has been added `);
  };

  deleteContact = (contactId, name) => {
    console.log(name);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

    Notiflix.Notify.info(`Contact ${name}  has been deleted`);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Head>PhoneBook</Head>
        <Container>
          <FormContainer>
            <ContactForm onSubmit={this.addContact} />
          </FormContainer>

          <LeftContainer>
            {visibleContacts.length === 0 ? (
              <p>Sorry,you have not contacts in phonebook!</p>
            ) : (
              <>
                <Title>Contacts</Title>
                <Filter
                  value={this.state.filter}
                  onChange={this.changeFilter}
                />
                <ContactsList
                  visibleContacts={visibleContacts}
                  onDelete={this.deleteContact}
                />
              </>
            )}
          </LeftContainer>
        </Container>
      </>
    );
  }
}

export default App;
