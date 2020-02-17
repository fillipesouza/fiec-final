import React from 'react'
import { Button } from 'react-bootstrap';

const Header = (props) => {
    const nome = props.nome.toUpperCase();
    return (
    <header>
        {nome} Legal 
        <Button variant="primary" className="mr-2">Test Primário</Button>
        <br />
    </header>
    )
}

export default Header;

