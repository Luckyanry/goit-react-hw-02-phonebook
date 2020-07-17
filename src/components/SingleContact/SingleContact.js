import React from "react";
import "./SingleContact.css";
import PropTypes from "prop-types";

const SingleContact = ({ contact, deleteContact }) => {
  const { name, id, number } = contact;
  return (
    <li className="Contact">
      {name}: {number}
      <button className="DelBtn" type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default SingleContact;

SingleContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    namber: PropTypes.string,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
