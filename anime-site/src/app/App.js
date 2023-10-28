import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import {database_anime} from "./main/database_anime"
import { useState } from 'react';

function App() {

  const [page, setPage] = React.useState('Home')
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  
  const handleSearch = (event) => {
      const query = event.target.value;
      setSearchTerm(query);
  
      const filteredResults = database_anime.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
  
      setSearchResults(filteredResults);
    };
 

  return (
    <>
      <BrowserRouter>
          <Header/>
          <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
          <Main/>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
