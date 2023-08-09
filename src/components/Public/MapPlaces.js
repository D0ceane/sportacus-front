import '../../assets/style/placeApiStyles.css';
import {Grid} from "@mui/material";
import Maps from "./Maps";
import React from "react";
import tartanTrack from "../../assets/icon/tartanTrack.jpg";
import { Accessible, NotAccessible } from '@mui/icons-material';

export default function MapPlaces({placeApis, isLoading, error}){
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
                        <Grid item sx={{marginTop: 1}}>
                            <span className="place-name">
                                Nom de l'installation : {placeApi.installationName}
                            </span>
                            <span className="place-name">
                                {placeApi.equipmentFamily}
                            </span>

                            <span className="place-accessibility">
                                {placeApi.accessibleInstallationToPeopleWithDisabilities === "0"
                                    ? <NotAccessible/>
                                    : placeApi.accessibleInstallationToPeopleWithDisabilities === "1"
                                    ? <Accessible/>
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