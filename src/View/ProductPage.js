import React from "react"

import imgPlantTitle from "../assets/cat-flower.jpg"

import { CardTitleProduct } from "../component/CardProduct/CardTitleProduct"

export const Productpage = () => {
    return (
        <div>
            <div className="category-container">
                <CardTitleProduct
                    name="Fleurs"
                    img={imgPlantTitle}
                />
                <CardTitleProduct
                    name="Fleurs"
                    img={imgPlantTitle}
                />
                <CardTitleProduct
                    name="Fleurs"
                    img={imgPlantTitle}
                />
                <CardTitleProduct
                    name="Fleurs"
                    img={imgPlantTitle}
                />
            </div>

        </div>
    )
}