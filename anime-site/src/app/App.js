import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

function App() {

  const [page, setPage] = React.useState('Home')

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
