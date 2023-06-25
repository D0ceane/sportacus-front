import React, { useEffect, useState } from 'react';
import MapPlaces from "./MapPlaces";

export default function GetPlaceApi(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData().then();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:9000/api/place-api');
            const data = await response.json();
            setData(data['hydra:member']);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <MapPlaces placeApis={data} isLoading={isLoading} error={error} />
        </div>
    );
};