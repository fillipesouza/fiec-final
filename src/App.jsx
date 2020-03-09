import React, { Component } from 'react'
import Fusca from './layout/Fusca';
import axios from './utils/meuaxios';
import CadastroFusca from './containers/CadastroFusca';

export class App extends Component {
  state = {
    fuscas : [],
    atualizacoes: 0
  }

  async componentDidMount() {
    const res = await axios.get('/fuscas');
    this.setState({fuscas: res.data})  
  }

  deletar = async (i) => {            
    await axios.delete('/fuscas/'+i);   
    //this.setState({ atualizacoes: this.state.atualizacoes+1 });
    const res = await axios.get('/fuscas');
    this.setState({fuscas: res.data}) 
  }

  inserir = async () => {
    await axios.post('/fuscas');   
    //this.setState({ atualizacoes: this.state.atualizacoes+1 });
    const res = await axios.get('/fuscas');
    this.setState({fuscas: res.data}) 
  }

  async componentDidUpdate(){
    //const res = await axios.get('/fuscas');
    //this.setState({fuscas: res.data}) 
  }

  render() {
    return (
      <div>
        <CadastroFusca />
        {this.state.fuscas.map((fusca,i)=>(
          <Fusca key={i} img={fusca.img} descricao={fusca.descricao} remove={() => this.deletar(i)}  />
        )) }
        
      </div>
    )
  }
}

export default App