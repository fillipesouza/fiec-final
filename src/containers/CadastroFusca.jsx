import React, { Component } from 'react';
import axios from 'axios';
import { validaCampos } from '../utils/validacao';

export class CadastroFusca extends Component {

    state = {
        formulario: {
            img: {
                valor: '',
                ehValido: false,
                tocado: false,
                validacoes: {
                    obrigatorio: true
                }
            },
            descricao: {
                valor: '',
                ehValido: false,
                tocado: false,
                validacoes: {
                    obrigatorio: true
                }
            }
        },
        formValido: false
    }

    checarFormulario = (formulario) => {
        let formValido = true;
        for(let dado in formulario){
            formValido = formValido && formulario[dado].ehValido;
        }
        return formValido;
    }

    cadastrar = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:38000/fuscas', this.state.formulario)
    }

    handleChange = (event) => {
        const formulario = { ...this.state.formulario};
        // Atualizo o valor do estado conforme o input do form
        const name = event.target.name;
        const value = event.target.value;
        formulario[name].valor = value;
        formulario[name].tocado = true;

        // Valida os campos e o formulário
        const erros = validaCampos(value, formulario[name].validacoes);
        formulario[name].ehValido = (erros.length == 0);
        
        const formValido = this.checarFormulario(formulario);

        // Atualizo o estado do formulario e dos campos
        this.setState({formulario, formValido});
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
                <button disabled={!this.state.formValido} onClick={this.cadastrar} type="submit" class="btn btn-primary">Submit</button>
            </form>   
            </div>
        )
    }
}

export default CadastroFusca
