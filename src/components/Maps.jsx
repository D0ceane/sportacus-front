import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { point } from 'leaflet/src/geometry';
import React, { useEffect, useState } from 'react';
import './mapsStyles.css';
import Geolocation from "./Geolocation";

export default function Maps({ placeApis }) {
    const customIcon = new Icon({
        iconUrl: require('../icon/marker.png'),
        iconSize: [38, 50],
    });

    const customIconLocated = new Icon({
        iconUrl: require('../icon/user.png'),
        iconSize: [38, 50],
    });

    const createCustomClusterIcon = (cluster) => {
        return divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true),
        });
    };

    const [position, setPosition] = useState([48.866667, 2.333333]);

    useEffect(() => {
        const userLocation = localStorage.getItem('userLocation');
        if (userLocation) {
            const { latitude, longitude } = JSON.parse(userLocation);
            const userPosition = [latitude, longitude];
            setPosition(userPosition);
        }
    }, []);


    let userGpsCoordinate = null;
    const userLocation = localStorage.getItem('userLocation');
    if (userLocation) {
        const { latitude, longitude } = JSON.parse(userLocation);
        const userPosition = [latitude, longitude];

        userGpsCoordinate = (
            <Marker
                key={1}
                position={userPosition}
                icon={customIconLocated}
            >
                <Popup>{"You are here!"}</Popup>
            </Marker>
        );
    }

    function ChangeMapView({ center }) {
        const map = useMap();
        map.setView(center, map.getZoom());
        return null;
    }

    return (
        <>
            <Geolocation/>
            <div id="map">
                <MapContainer
                    scrollWheelZoom={false}
                    center={position}
                    zoom={13}
                    style={{ height: "100vh", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {userGpsCoordinate}
                    <ChangeMapView center={position} />
                    <MarkerClusterGroup
                        chunkedLoading
                        iconCreateFunction={createCustomClusterIcon}
                    >
                        {placeApis.map((placeApi) => (
                            <Marker
                                key={`${placeApi.coordgpsx}-${placeApi.coordgpsy}`}
                                position={[placeApi.coordgpsx, placeApi.coordgpsy]}
                                icon={customIcon}
                            >
                                <Popup>{placeApi.installationName}</Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </>
    );
}