import React from 'react';
import {Link} from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="SideMenu">
Side Menu Operations
            <ul>
                <li>
                    <Link to="/"> Accueil</Link>
                </li>
                <li>
                    <Link to="/admin/user/add"> Add User </Link>
                </li>
                <li>
                    <Link to="/admin/user/edit"> Edit User </Link>
                </li>
                <li>
                    <Link to="/admin/user/delete"> Delete User </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;