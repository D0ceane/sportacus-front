import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <ul>
                <li><Link to="/"> Accueil </Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard"> Dashboard </Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user"> Liste </Link></li>
                        <li><Link to="/admin/user/add"> Ajouter </Link></li>
                        <li><Link to="/admin/user/edit"> Modifier </Link></li>
                        <li><Link to="/admin/user/delete"> Supprimer</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;