import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  formInitialState = {
    name: "",
    number: "",
  };

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    ...this.formInitialState,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { name, number, contacts } = this.state;
    e.preventDefault();

    const isExists = contacts.find((contact) => contact.name === name);
    if (isExists) {
      alert(`${name} is already exist in contacts!`);
      return this.reset();
    }

    const singleContact = {
      name,
      number,
      id: uuidv4(),
    };

    this.addContact(singleContact);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.formInitialState });
  };

  addContact = (contactObj) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = ({ target }) => {
    const { id } = target;
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.getFilteredContact();
    return (
      <>
        <h2>Phonebook</h2>
        <form className="ContactsForm" onSubmit={this.submitHandler}>
          <label className="InputName">
            Name
            <br />
            <input
              className="InputForm"
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              onChange={this.inputHandler}
            />
          </label>
          <br />
          <label className="InputName">
            Number
            <br />
            <input
              className="InputForm"
              type="text"
              name="number"
              placeholder="Add phone number"
              value={number}
              onChange={this.inputHandler}
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label className="InputName">
          Find contacts by name
          <br />
          <input
            className="FilterForm"
            type="text"
            name="filter"
            placeholder="Find contact"
            value={filter}
            onChange={this.inputHandler}
          />
        </label>
        <ul>
          {filteredContacts.map(({ name, id, number }) => (
            <li className="Contact" key={id}>
              {name}: {number}
              <button
                className="DelBtn"
                type="button"
                id={id}
                onClick={this.deleteContact}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
