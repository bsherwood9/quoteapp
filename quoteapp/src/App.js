import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get("https://quotes-db-harms.herokuapp.com/quotes").then(response => {
      setQuotes(response.data);
    });
  }, []);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quotes">Quotes</Link>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/quotes"
          render={() => (
            <Quotes quotes={quotes} setSearchTerm={setSearchTerm} />
          )}
        />
      </nav>
    </div>
  );
}

export default App;
