import React from 'react';
import {useParams} from "react-router-dom";

const UserEdit = () => {
// Pour récupérer notre utilisateur on a le useParam du Router, on a donc déstructurer useparam pour isoler la valeur dont on a besoin. Ici "uid"
    let {uid} = useParams()
    console.log(uid)

    return (
        <div className="UserEdit">
            Modifier un utilisateur
            <br/>
            Vous modifiez l'utilisateur n°{uid}
        </div>

    );

};

export default UserEdit;