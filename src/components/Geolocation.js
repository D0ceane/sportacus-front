import React, { useEffect } from 'react';

const Geolocation = () => {
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        localStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }));
                        console.log('Location retrieved and stored in localStorage.');
                    },
                    (error) => {
                        console.error('Error retrieving location :', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };
        getLocation();
    }, []);

    return null;
};

export default Geolocation;