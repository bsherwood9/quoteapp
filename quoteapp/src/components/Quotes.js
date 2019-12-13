import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function Quotes({ quotes, setSearchTerm, resultTerm }) {
  return (
    <div>
      <h1>Quotes</h1>
      <Form setSearchTerm={setSearchTerm} />
      {resultTerm.map(item => {
        return (
          <>
            <p>{item.quote}</p>
            <h1>{item.speaker}</h1>
          </>
        );
      })}
    </div>
  );
}

export default Quotes;
