import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fuscas">Fuscas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cadastro">Cadastro</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default Header;

