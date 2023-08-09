import React from 'react';
import Login from "./Login";
import {Route, Routes} from "react-router-dom";
import Error from "../../_utils/Error";
import SignUp from "./SignUp";
import ForgetPasswd from "./ForgetPasswd";

const AuthRouter = () => {
    return (
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="mot-de-passe-oublié" element={<ForgetPasswd/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
    );
};

export default AuthRouter;