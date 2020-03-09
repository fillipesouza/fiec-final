import React, { Component } from 'react'

import axios from './utils/meuaxios';
import Fuscas from './containers/Fuscas';
import CadastroFusca from './containers/CadastroFusca';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './layout/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/fuscas" ><Fuscas /></Route>
          <Route path="/cadastro" ><CadastroFusca /></Route>
          <Redirect to="/fuscas"></Redirect>
        </Switch>        
        
      </div>
    )
  }
}

export default App