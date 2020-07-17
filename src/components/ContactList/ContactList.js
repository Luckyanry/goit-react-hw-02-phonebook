import React from "react";
import SingleContact from "../SingleContact/SingleContact";
import PropTypes from "prop-types";

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map((contact, id) => {
        return (
          <SingleContact
            key={id}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      namber: PropTypes.string,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
