import React from "react";
import { useState, useEffect } from "react";

function Form({ setSearchTerm }) {
  return (
    <form>
      <label>Search</label>
      <input type="text" placeholder="Search" />
    </form>
  );
}

export default Form;
