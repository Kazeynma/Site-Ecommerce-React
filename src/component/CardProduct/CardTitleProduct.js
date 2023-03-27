import React from 'react'

import './CardProduct.css'

export const CardTitleProduct = (props) => {
    return (
        <div className='card-title' onClick={() => props._onClick(props.category)}>
            <img src={props.img} alt="img category product" className='img-product-title'></img>
            <div className='overlay'>
                <span>{props.name}</span>
            </div>

        </div>
    )
}