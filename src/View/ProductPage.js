import { useState, useEffect } from "react"

import { Divider } from "@mui/material"
import imgPlantTitle from "../assets/cat-flower.jpg"
import { CardTitleProduct } from "../component/CardProduct/CardTitleProduct"
import { CardProduct } from "../component/CardProduct/CardProduct"

import { dataPlants } from "../data.js/product"
import "../style/Productpage.css"

export const Productpage = () => {
    const [category, setCategory] = useState("")

    const _onClick = (name) => {
        setCategory(name)
    }

    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <div>
            <div className="category-container">
                <CardTitleProduct
                    name="Toutes les catégories"
                    img={imgPlantTitle}
                    _onClick={_onClick}
                    category=""
                />
                <CardTitleProduct
                    name="Fleurs"
                    img={imgPlantTitle}
                    _onClick={_onClick}
                    category="flower"
                />
                <CardTitleProduct
                    name="Plantes"
                    img={imgPlantTitle}
                    _onClick={_onClick}
                    category="tropical"
                />
                <CardTitleProduct
                    name="Fleurs séchées"
                    img={imgPlantTitle}
                    _onClick={_onClick}
                    category="dried-flower"
                />
                <CardTitleProduct
                    name="Bouquet"
                    img={imgPlantTitle}
                    _onClick={_onClick}
                    category="bouquet"
                />
            </div>
            <Divider />
            <div className="products-list">
                {dataPlants.map((product, index) => {
                    if (category === "") {
                        return (
                            <CardProduct
                                titre={product.name}
                                image={imgPlantTitle}
                                price={product.price}
                            />
                        )
                    } else if (category !== "" && category === product.category) {
                        return (
                            <CardProduct
                                titre={product.name}
                                image={imgPlantTitle}
                                price={product.price}
                            />
                        )
                    }


                })}

            </div>
        </div>
    )
}