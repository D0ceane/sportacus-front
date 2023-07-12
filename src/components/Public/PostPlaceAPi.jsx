import React, { useState } from 'react';
import AddPlaceApi from "./AddPlaceApi";

export default function PostPlaceAPi() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (postData) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:9000/api/created-place-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <AddPlaceApi postData={postData} isLoading={isLoading} error={error} />
        </div>
    );
};
