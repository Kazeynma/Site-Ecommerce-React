import React from 'react'
import { Link } from 'react-router-dom'

import '../style/Header.css'


export const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h1 className="title">Lorant</h1>
            </div>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/products">Nos produits</Link></li>
                <li>Soldes</li>
                <li>Panier</li>
                <li><Link to='/contact'>Contactez nous</Link></li>
            </nav>
        </div>
    )
}