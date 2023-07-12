import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="SideMenu">
Side Menu Operations
            <ul>
                <li>
                    <Link to="/"> Accueil </Link>
                </li>
                <li>
                    <Link to="/admin/user/list"> Liste des utilisateurs </Link>
                </li>
                <li>
                    <Link to="/admin/user/add"> Ajouter un utilisateur </Link>
                </li>
                <li>
                    <Link to="/admin/user/edit"> Modifier un utilisateur </Link>
                </li>
                <li>
                    <Link to="/admin/user/delete"> Supprimer un utilisateur </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;