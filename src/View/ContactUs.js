import React from "react"

import { TextField, Button } from "@mui/material"

import "../style/ContactUs.css"
import contactUs from "../assets/ask.svg"

export const ContactUs = () => {
    return (
        <div className="content">
            <div className="sidebar-contact">
                <h2>Vous rencontrez des problèmes ?</h2>
                <img src={contactUs}></img>
                <span>Vous pouvez nous contacter via notre formulaire</span>
            </div>
            <div>
                <form>
                    <div className="form-content">
                        <TextField
                            label="Votre nom"
                            required
                        />
                        <TextField
                            label="Votre prénom"
                            required
                        />
                        <TextField
                            label="Votre email"
                            required
                        />
                        <TextField
                            label="Votre message"
                            required
                            multiline
                            rows={5}
                        />
                        <Button variant="contained">Envoyer</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}