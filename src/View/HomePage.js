import React from "react"
import "../style/Homepage.css"

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
                    <div className="card">
                        <img src={require("../assets/aloeVera.jpg")} alt="aloe vera" />
                        <h3>Aloe Vera</h3>
                        <p>Prix</p>
                    </div>
                    <div className="card">
                        <img src="../assets/areca.jpg" alt="areca" />
                        <h3>Areca</h3>
                        <p>Prix</p>
                    </div>
                    <div className="card">
                        <img src="./assets/ficus_giseng.jpg" alt="ficus giseng" />
                        <h3>Ficus Giseng</h3>
                        <p>Prix</p>
                    </div>
                    <div className="card">
                        <img src="./assets/lyrata.jpg" alt="lyrata" />
                        <h3>Ficus Lyrata</h3>
                        <p>Prix</p>
                    </div>
                    <div className="card">
                        <img src="./assets//monstera.jpg" alt="monstera" />
                        <h3>Monstera</h3>
                        <p>Prix</p>
                    </div>
                    <div className="card">
                        <img src="./assets/pothos.jpg" alt="pothos" />
                        <h3>Pothos</h3>
                        <p>Prix</p>
                    </div>
                </div>
            </div>
            < div className="second-container" >
                <div className="second-sidebar">
                    <h2 className="sidebar-text">Nous avons aussi un large choix de fleurs qui pourrons vous plaire</h2>
                    <div className="mini-card-container">
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/roses.jpeg" alt="roses" />
                            <p>Roses</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/lilas.jpg" alt="pothos" />
                            <p>Lilas</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/orchidée.jpg" alt="pothos" />
                            <p>Orchidée</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/bouquet_fleur.jpg" alt="pothos" />
                            <p>Bouquet</p>
                        </div>
                    </div>
                    <button className="sidebar-link">Découvrez nos fleurs ici</button>
                    <h2 className="sidebar-text">...avec leur variante en fleurs séchées</h2>
                    <div className="mini-card-container">
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/roses_sechee.jpg" alt="roses" />
                            <p>Roses</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/lilas_sechee.jpg" alt="pothos" />
                            <p>Lilas</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/fleur_pampa.jpg" alt="pothos" />
                            <p>Fleur de pampa</p>
                        </div>
                        <div className="mini-card">
                            <img className="mini-image" src="./assets/bouquet_sechee.jpg" alt="pothos" />
                            <p>Bouquet seché</p>
                        </div>
                    </div>
                    <button className="sidebar-link">Découvrez nos fleurs séchées ici</button>

                </div>
                <div className="second-sidebar">
                    <h3>Qu'est-ce que vous pouvez faire avec des fleurs ?</h3>
                    <section>
                        <img src="./assets/Blooming-cuate.svg" />
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