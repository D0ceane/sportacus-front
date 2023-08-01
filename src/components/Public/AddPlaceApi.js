// PostDataComponent.js
import React, {useState} from 'react';
import DOMPurify from 'dompurify';
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import '../../assets/style/addPlaceApiStyles.css';

export default function AddPlaceApi({ postData, isLoading, error }) {
    const [installationName, setInstallationName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [equipmentFamily, setEquipmentFamily] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [commune, setCommune] = useState('');
    const [coordgpsx, setCoordgpsx] = useState('');
    const [coordgpsy, setCoordgpsy] = useState('');
    const [open, setOpen] = React.useState(false);

    const filterInput = (input) => {
        return input.replace(/[?'";<>#&|*%-]/g, ' ');
    };
    const handlePost = () => {
        const filteredInstallationName = filterInput(installationName);
        const filteredAdresse = filterInput(adresse);
        const filteredPostalCode = filterInput(postalCode.toString());
        const filteredEquipmentFamily = filterInput(equipmentFamily);
        const filteredCommune = filterInput(commune);
        const filteredCoordgpsx = filterInput(coordgpsx.toString());
        const filteredCoordgpsy = filterInput(coordgpsy.toString());

        // Créer un objet avec les données du formulaire en utilisant DOMPurify pour sécuriser les valeurs
        const formData = {
            installationName: DOMPurify.sanitize(filteredInstallationName),
            adresse: DOMPurify.sanitize(filteredAdresse),
            postalCode: DOMPurify.sanitize(filteredPostalCode),
            equipmentFamily: DOMPurify.sanitize(filteredEquipmentFamily),
            commune: DOMPurify.sanitize(filteredCommune),
            coordgpsx: DOMPurify.sanitize(filteredCoordgpsx),
            coordgpsy: DOMPurify.sanitize(filteredCoordgpsy),
        };
        postData(formData);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="form-container">
            <div className="form-field">
                <label htmlFor="installationName">Nom du lieu de sport :</label>
                <input
                    type="text"
                    id="installationName"
                    maxLength="100"
                    value={installationName}
                    onChange={(e) => setInstallationName(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="adresse">Adresse du lieu:</label>
                <input
                    type="text"
                    id="adresse"
                    maxLength="100"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="Code postal">Code postal :</label>
                <input
                    type="text"
                    id="Code postal"
                    minLength="5"
                    maxLength="5"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="Commune">Commune :</label>
                <input
                    type="text"
                    id="Commune"
                    maxLength="50"
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="coordgpsx">Longitude :</label>
                <input
                    id="coordgpsx"
                    type="number"
                    step="0.0000000001"
                    minLength="2"
                    maxLength="10"
                    value={coordgpsx}
                    onChange={(e) => setCoordgpsx(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="coordgpsy">Latitude :</label>
                <input
                    id="coordgpsy"
                    type="number"
                    step="0.0000000001"
                    minLength="2"
                    maxLength="10"
                    value={coordgpsy}
                    onChange={(e) => setCoordgpsy(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="equipmentFamily">Famille d'équipement :</label>
                <input
                    type="text"
                    id="equipmentFamily"
                    value={equipmentFamily}
                    onChange={(e) => setEquipmentFamily(e.target.value)}
                />
            </div>
            <button className="sendDemand" onClick={handlePost}>Envoyer la demande</button>
            {open && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="popup">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Demande de création de lieu de sport
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Votre demande a bien été prise en compte. Elle sera traitée dans les plus brefs délais.
                            Merci de votre contribution.
                        </Typography>
                    </Box>
                </Modal>
            )}
        </div>
    );
};