import React from 'react'

const Input = (props) => {
    let novoInput = null;

    switch(props.type){

        case 'textarea':        
          novoInput = <textarea onChange={props.change}  className="form-control"    name={props.name} id={props.id} rows="3">
          </textarea>        
        break;
        case 'select':
        novoInput =  <select onChange={props.change} className="form-control" name={props.name} id={props.id}>
           {props.valor.map(v =>
            <option value={v.value}>{v}</option>
           )}
          </select>
        break;
        default:
        novoInput = <input onChange={props.change} type="text"
            className="form-control" name={props.name} id={props.id} 
            aria-describedby="helpId" placeholder="" />  
        break; 
    }

    return (
        <div class={"form-group "  + (!props.ehValido && !props.tocado)?"invalid" : ''}>
          <label for={props.id}>{props.titulo}</label>
          {novoInput}
          {props.erros.map(erro => 
              <small style={{ color: 'red' }}> {erro}<br />
              </small>
          )}
        </div>
    )
}

export default Input;
