import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AdminLayout, Dashboard} from "../Admin";
import {Users, UserAdd, UserEdit} from "../Admin/User"
import Error from "../../_utils/Error";
import {UserDelete} from "./User";

const AdminRouter = () => {
    return (
        <div className="AdminRouter">
            <Routes>
                <Route element={<AdminLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="user">
                        <Route path="" element={<Users/>}></Route>
                        <Route path="add" element={<UserAdd/>}></Route>
                        <Route path="edit/" element={<UserEdit/>}></Route>
                        <Route path="edit/:uid" element={<UserEdit/>}></Route>
                        <Route path="delete" element={<UserDelete/>}></Route>
                    </Route>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRouter;