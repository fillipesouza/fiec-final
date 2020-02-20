import React, { Component } from 'react'
import Fusca from './layout/Fusca';
import axios from 'axios';

export class App extends Component {
  state = {
    fuscas : []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:38000/fuscas');    
    this.setState({ fuscas: res.data });    
  }

  deletar=(i)=>{
     
     const fuscas=this.state.fuscas;
     console.log(i);
     fuscas.splice(i,1);
     //console.log(fuscas);
     this.setState({fuscas})
  }

  render() {
    return (
      <div>
        {this.state.fuscas.map((fusca,i)=>(
          <Fusca key={i} img={fusca.img} descricao={fusca.descricao} remove={() => this.deletar(i)}  />
        )) }
        
      </div>
    )
  }
}

export default App