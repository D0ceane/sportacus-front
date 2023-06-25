import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "./Home";
import SignUp from "../../components/SignIn";
import AddPlaceApi from "../../components/AddPlaceApi";
import Error from "../../_utils/Error";

const PublicRouter = () => {
    return (
        <div className="PublicRouter">
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/connexion" element={<SignUp/>}/>
                    <Route path="/accueil" element={<Home/>}/>
                    <Route path="/ajouter-lieu" element={<AddPlaceApi/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default PublicRouter;