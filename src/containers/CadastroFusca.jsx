import React, { Component } from 'react';
import axios from 'axios';

export class CadastroFusca extends Component {

    state = {
        formulario: {
            img: '',
            descricao: ''
        }
    }

    cadastrar = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:38000/fuscas', this.state.formulario)
    }

    handleChange = (event) => {
        const formulario = { ...this.state.formulario};
        const name = event.target.name;
        const value = event.target.value;
        formulario[name] = value;
        this.setState({formulario});
    }

    render() {
        return (
            <div>
            <form>
                <div class="form-group">
                  <label for="descricao">Descricao</label>
                  <input type="text" onChange={this.handleChange}
                    class="form-control" name="descricao" id="descricao" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" class="form-text text-muted">Descricao</small>
                </div>
                <div class="form-group">
                  <label for="img">Imagem</label>
                  <input type="text" onChange={this.handleChange}
                   class="form-control" name="img" id="img" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" class="form-text text-muted">URL da Imagem</small>
                </div>
                <button onClick={this.cadastrar} type="submit" class="btn btn-primary">Submit</button>
            </form>   
            </div>
        )
    }
}

export default CadastroFusca
