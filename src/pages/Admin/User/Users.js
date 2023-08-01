import React from 'react';
import {useNavigate} from "react-router-dom";

const Users = () => {
    let navigate = useNavigate();

    const marcel = (userId) => {
        console.log("click")
        //on utilise navigate à partir d'un évènement sur lequel on va binder une méthode
        navigate("edit/"+userId)
    }
    return (
        <div className="Users">
            Liste des utilisateurs

            {/* la méthode en question ci-dessous*/}
                <button onClick={() => { marcel(4) }}>
                    Utilisateur n°4
                </button>
        </div>
    );
};

export default Users;