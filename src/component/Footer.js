import React from 'react'
import "../style/Footer.css"

//inmport icons
import insta from "../assets/instagram.svg"
import fb from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"

export const Footer = () => {
    return (
        <div className='footer'>
            <h1 className="title-footer">Lorant</h1>
            <div className="content-footer">
                <div className="footer-section">
                    <p className="title-column">Rejoignez nous</p>
                    <img className="icon" src={insta} alt="instagram"></img>
                    <img className="icon" src={fb} alt="facebook"></img>
                    <img className="icon" src={twitter} alt="twitter"></img>
                </div>
                <div className="footer-section">
                    <p className="title-column">Aide</p>
                    <p>Service client</p>
                    <p>Détails de livraison</p>
                    <p>Termes et conditions</p>
                    <p>Politique de confidentialité</p>
                </div>
                <div className="footer-section">
                    <p className="title-column">Notre entreprise</p>
                    <p>Nos locaux</p>
                    <p>A propos de nous</p>
                    <p>Notre équipe</p>
                    <p>Nos collaborateurs</p>
                </div>
                <div className="footer-section" id="newsletter">
                    <p className="title-column">Inscrivez vous à notre Newsletter</p>
                    <div className="newsletter">
                        <input type="text" placeholder="votre email" class="newsletter-input"></input>
                        <button className="newsletter-button">Rejoindre</button>
                    </div>
                </div>
            </div>
        </div>
    )
}