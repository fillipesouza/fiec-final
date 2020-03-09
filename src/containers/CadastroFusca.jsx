import React, { Component } from 'react';
import axios from '../utils/meuaxios';
import { validaCampos } from '../utils/validacao';
import Input from '../utils/Input';

export class CadastroFusca extends Component {

    state = {
        formulario: {
            img: {
                type: 'text',
                titulo: 'Imagem aqui',
                valor: '',
                ehValido: false,
                tocado: false,
                erros: [],
                validacoes: {
                    obrigatorio: true
                }
            },
            descricao: {
                type: 'text',
                titulo: 'Descricao aqui',
                valor: '',
                ehValido: false,
                tocado: false,
                erros: [],
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
        await axios.post('/fuscas', this.state.formulario)
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
        formulario[name].erros = erros;
        formulario[name].ehValido = (erros.length == 0);
        
        const formValido = this.checarFormulario(formulario);

        // Atualizo o estado do formulario e dos campos
        this.setState({formulario, formValido});
    }

    render() {
        return (
            <div>
            <form>
                {Object.keys(this.state.formulario).map(dado => {
                    const input = this.state.formulario[dado];
                    return (
                    <Input change={this.handleChange} 
                         id={dado} name={dado} titulo={input.titulo}
                         tocado={input.tocado} ehValido={input.ehValido}
                         erros = {input.erros}
                        />
                    )
                })}
                <button disabled={!this.state.formValido} onClick={this.cadastrar} type="submit" class="btn btn-primary">Submit</button>
            </form>   
            </div>
        )
    }
}

export default CadastroFusca
