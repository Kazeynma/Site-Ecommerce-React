import { Link } from "react-router-dom"

import { TextField, Button } from "@mui/material"
import "../style/CreateAccount.css"

export const CreateAccoount = () => {
    return (
        <div>
            <form className="form-create-account">
                <TextField
                    label="Votre pseudo"
                />
                <TextField
                    label="Votre email"
                />
                <TextField
                    label="Votre password"
                />
                <TextField
                    label="Confirmer votre mot de passe"
                />
                <Button>Créer un compte</Button>
            </form>
            <Link to="/login" className="link"><span>vous avez déjà un compte ?</span></Link>
        </div>
    )
}