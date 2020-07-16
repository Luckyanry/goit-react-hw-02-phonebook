import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

// <li>Rosie Simpson</li>
// <li>Hermion Kline</li>
// <li>Eden Clements</li>

class App extends Component {
  formInitialState = {
    name: "",
    number: "",
  };

  state = {
    contacts: [],
    ...this.formInitialState,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

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

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, name, number } = this.state;
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
        <ul>
          {contacts.map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
