import React from 'react';
import './App.css';
import Header from './layout/Header';
import Button from './layout/Button';
import Main from './layout/Main';
import Teste from './containers/Teste';

const App = () => {
  return (
    <div className="App">
      <Header nome="cassiel fica quieto" />
      <Button cor="white" fundo="black" >
         Magnanimo
      </Button>
      <Teste />
    </div>
  );
}

export default App;
