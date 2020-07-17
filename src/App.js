import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFilter = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (contactObj) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  deleteContact = ({ target }) => {
    const { id } = target;
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm state={this.state} addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter state={this.state} handleFilter={this.handleFilter} />
        <ContactList
          filteredContacts={this.getFilteredContact()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
