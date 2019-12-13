import React from "react";
import { useState, useEffect } from "react";

function Form({ setSearchTerm }) {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <form>
      <label>Search</label>
      <input type="text" placeholder="Search" onChange={handleChange} />
    </form>
  );
}

export default Form;
