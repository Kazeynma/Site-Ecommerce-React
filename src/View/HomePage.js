import React from "react"
import "../style/Homepage.css"

//import component
import { CardProduct } from "../component/CardProduct/CardProduct"
import { MiniCardProduct } from "../component/CardProduct/MiniCardProduct"

import { dataPlants } from "../data.js/product"
import image from "../assets/generic-image.jpg"
import flowerToOfferImg from "../assets/Blooming-cuate.svg"

export const HomePage = () => {

    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <p className="catch-phrase">Avec nous, vous pouvez vous sentir chez vous</p>
                    <h1>Découvrez nos plantes tropicales</h1>
                    <h3 className="catch-phrase">A l'intérieur ou à l'extérieur, c'est vous qui décidez</h3>
                    <button className="sidebar-link">Retrouvez nos inspirations ici</button>
                </div>
                <div className="card-container">
                    {dataPlants.map((product, index) => {
                        if (product.category === "tropical") {
                            console.log(product)
                            return (
                                <CardProduct
                                    titre={product.name}
                                    price={product.price}
                                    image={image}
                                />
                            )
                        }

                    })}
                </div>
            </div>
            < div className="second-container" >
                <div className="second-sidebar">
                    <h2 className="sidebar-text">Nous avons aussi un large choix de fleurs qui pourrons vous plaire</h2>
                    <div className="mini-card-container">

                    </div>
                    <button className="sidebar-link">Découvrez nos fleurs ici</button>
                    <h2 className="sidebar-text">...avec leur variante en fleurs séchées</h2>
                    <div className="mini-card-container">

                    </div>
                    <button className="sidebar-link">Découvrez nos fleurs séchées ici</button>

                </div>
                <div className="second-sidebar">
                    <h3>Qu'est-ce que vous pouvez faire avec des fleurs ?</h3>
                    <section>
                        <img src={flowerToOfferImg} />
                        <p>Les offrir ou simplement pour vous faire plaisir.</p>

                        <p>Certaines fleurs sont également comestible. Retrouvez toute la catégorie de fleurs comestible ici :
                            Nous proposons également des recettes !
                        </p>
                    </section>
                </div>
            </div >
        </div>
    )
}