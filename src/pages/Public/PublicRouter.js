import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout, Home} from '../Public'
import Error from "../../_utils/Error";

import SignUp from "../Auth/Login";
import AddPlaceApi from "../../components/Public/AddPlaceApi";

const PublicRouter = () => {
    return (
        <div className="PublicRouter">
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/connexion" element={<SignUp/>}/>
                    <Route path="/ajouter-lieu" element={<AddPlaceApi/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default PublicRouter;