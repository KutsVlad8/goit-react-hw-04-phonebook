import PropTypes from 'prop-types';
import { ContactList, ContactListItem, Button } from './ContactsList.styled';

const ContactsList = ({ visibleContacts, onDelete }) => {
  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id, contact.name);
            }}
          >
            delete
          </Button>
        </ContactListItem>
      ))}
    </ContactList>
  );
};

ContactsList.propTypes = {
  visibleContacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactsList;
