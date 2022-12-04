import React from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {

  const [page, setPage] = React.useState('home')

  return (
    <div>
      <Header/>
      {/* <Main page = { {page : this.page, setPage: this.setPage} }/> */}
      <Footer/>
    </div>
  );
}

export default App;
