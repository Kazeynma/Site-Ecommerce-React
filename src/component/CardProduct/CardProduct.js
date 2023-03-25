import React from "react"

import "./CardProduct.css"

export const CardProduct = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="image produit" />
            <h3>{props.titre}</h3>
            <span>{props.prix}</span>
        </div>
    )
}