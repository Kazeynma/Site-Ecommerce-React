import React from 'react'

import "./CardProduct.css"

export const MiniCardProduct = (props) => {
    return (
        <div className="mini-card">
            <img src={props.image} alt="photo produit" />
            <span>{props.titre}</span>
        </div>
    )
}