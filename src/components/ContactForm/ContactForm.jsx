import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputNameId = nanoid(2);
  const nameInputNumberId = nanoid(2);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return console.log('неверный тип поля');
    }
  };

  const handelSubmit = event => {
    event.preventDefault(name, number);

    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label htmlFor={nameInputNameId}>Name</Label>
      <Input
        id={nameInputNameId}
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor={nameInputNumberId}>Number</Label>
      <Input
        id={nameInputNumberId}
        onChange={handleChange}
        type="tel"
        name="number"
        value={number}
        pattern="+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
