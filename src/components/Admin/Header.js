import React from 'react';
import {accountService} from "../../_services/account.service";
import {useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate()

    const logout = () => {
        accountService.logout()
        navigate('/')
    }
    return (
        <div className="AdminHeader">
            Header Admin
            <button onClick={logout}>Déconnexion</button>
        </div>
    );
};

export default Header;