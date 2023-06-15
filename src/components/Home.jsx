import './placeApiStyles.css';
import {Grid} from "@mui/material";
import Maps from "./Maps";
import React from "react";
import tartanTrack from "../icon/tartanTrack.jpg";

export default function Home({placeApis, isLoading, error}){
    if (isLoading) {
        return <div>Loading... plz waiting</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="placeApi">
            <div className="infosPlaceApi">
                {placeApis.map(placeApi => (
                    <Grid
                        key={`${placeApi.coordgpsx}-${placeApi.coordgpsy}`}
                        container
                        alignItems="center"
                        className="clickable-block"
                        sx={{ padding: 2 }}
                    >
                        <Grid item>
                            <img
                                src={tartanTrack}
                                alt="Piste de sport avec des lignes blanches et de l'herbe verte autour"
                                className="place-image"
                            />
                        </Grid>
                        <Grid item sx={{margin: 1}}>
                            <span className="place-name">
                                Nom de l'installation : {placeApi.installationName}
                            </span>
                            <br/>
                            <span className="place-name">
                                {placeApi.equipmentFamily}
                            </span>
                            <br/>
                            <span className="place-name">
                                {placeApi.accessibleInstallationToPeopleWithDisabilities === "0"
                                    ? "Non accessible aux personnes handicapées"
                                    : placeApi.accessibleInstallationToPeopleWithDisabilities === "1"
                                    ? "Accessible aux personnes handicapées"
                                    : "Non renseigné"}
                            </span>
                        </Grid>
                    </Grid>
                ))}
            </div>
            <div className="map">
                <Maps placeApis={placeApis}/>
            </div>
        </div>
    );
}