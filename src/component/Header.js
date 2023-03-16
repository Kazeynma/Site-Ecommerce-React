import React from 'react'
import '../style/Header.css'


export const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h1 className="title">Lorant</h1>
            </div>
            <nav>
                <li><a href="index.html">Home</a></li>
                <li><a href="./view/productPage.html">Tous nos produits</a></li>
                <li>Soldes</li>
                <li>Panier</li>
                <li><a href="./view/contactUs.html">Nous contacter</a></li>
            </nav>
        </div>
    )
}