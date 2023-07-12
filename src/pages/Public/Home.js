import React from 'react';
import GetPlaceApi from "../../components/Public/GetPlaceApi";

const Home = () => {
    return (
        <div className="container">
            <div className="listPlaceApi"></div>
            <GetPlaceApi/>
            <div className="viewMap"></div>
            <div className="navBar"></div>
        </div>
    );
};

export default Home;