import React, { Component } from 'react'

import axios from './utils/meuaxios';
import Fuscas from './containers/Fuscas';
import CadastroFusca from './containers/CadastroFusca';

export class App extends Component {
  render() {
    return (
      <div>
        <Fuscas />
         <CadastroFusca />
      </div>
    )
  }
}

export default App