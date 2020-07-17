import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ state, handleFilter }) => {
  const { filter } = state;
  return (
    <label className="InputName">
      Find contacts by name
      <br />
      <input
        className="FilterForm"
        type="text"
        name="filter"
        placeholder="Find contact"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        namber: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
  }).isRequired,
  handleFilter: PropTypes.func.isRequired,
};
