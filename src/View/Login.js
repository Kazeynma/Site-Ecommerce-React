import { Link } from "react-router-dom"

import { TextField, Button } from "@mui/material"

import "../style/Login.css"

export const Login = () => {
    return (
        <div>
            <form className="form-login">
                <TextField
                    label="Votre email"
                />
                <TextField
                    label="Votre mot de passe"
                />
                <Button>Se connecter</Button>

                <Link to="/account/create" className="link"><span>Pas de compte ?</span></Link>
                <Link to="/account/create" className="link"><span>mot de passe oublié ?</span></Link>
            </form>

        </div>
    )
}