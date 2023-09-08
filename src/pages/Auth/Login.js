import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../../components/Public/Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {accountService} from "../../_services/account.service";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

                Sportacus
            {' '+ new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // Extraction de l'email et du password depuis le FormData
        const email = data.get('email');
        const password = data.get('password');

        // vérification de la bonne récupération des valeurs rentrées en input
        axios.post('http://localhost:9000/auth', {
            email: email,
            password: password,
        }).then(res =>{
            // Handle the response here (e.g., show success message, redirect, etc.)
            console.log('API response:', res);
            accountService.saveToken(res.data.token)
            navigate('/admin')
        })
            .catch(error => console.log(error));

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

        return (
            <ThemeProvider theme={defaultTheme}>
                <Navbar/>
                <Grid container component="main" sx={{height: '100vh'}}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?basketball)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Connexion
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Adresse email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot de passe"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Se souvenir de moi ?"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Se connecter
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="mot-de-passe-oublié" variant="body2">
                                            Mot de passe oublié ?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/auth/signup" variant="body2">
                                            {"Pas de compte ? S'inscrire "}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }