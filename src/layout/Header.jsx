import React from 'react'

const Header = (props) => {
    const nome = props.nome.toUpperCase();
    return (
    <header>
        {nome} Legal 
    </header>
    )
}

export default Header;

