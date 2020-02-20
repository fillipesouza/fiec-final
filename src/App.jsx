import React, { Component } from 'react'
import Fusca from './layout/Fusca';
import axios from 'axios';

export class App extends Component {
  state = {
    fuscas : [],
    atualizacoes: 0
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:38000/fuscas');
    this.setState({fuscas: res.data})  
  }

  deletar=(i)=>{
     
     const fuscas=this.state.fuscas;
     console.log(i);
     fuscas.splice(i,1);
     //console.log(fuscas);
     this.setState({fuscas})
  }

  inserir = async () => {
    await axios.post('http://localhost:38000/fuscas');   
    //this.setState({ atualizacoes: this.state.atualizacoes+1 });
    const res = await axios.get('http://localhost:38000/fuscas');
    this.setState({fuscas: res.data}) 
  }

  async componentDidUpdate(){
    //const res = await axios.get('http://localhost:38000/fuscas');
    //this.setState({fuscas: res.data}) 
  }

  render() {
    return (
      <div>
        <button onClick={this.inserir} >Inserir</button>
        {this.state.fuscas.map((fusca,i)=>(
          <Fusca key={i} img={fusca.img} descricao={fusca.descricao} remove={() => this.deletar(i)}  />
        )) }
        
      </div>
    )
  }
}

export default App