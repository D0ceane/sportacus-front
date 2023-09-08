import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {createTheme} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';

const theme = createTheme({
    custom:{
        basketball: '#ffbd59',
        football: '#38b6ff',
        natation: '#cb6ce6',
        athletisme: '#8c52ff',
        streetworkout: '#ffde59',
    },
    typography:{
        h1:{
            fontFamily: [
                'Arial',
            ],
            fontSize: 50,
            color: '#5d3c2b',
            fontWeight: 600,
        },
        navbar:{
            fontStyle: "none"
        }
    }
})

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="compte de l'utilisateur"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                         >
                            <MenuIcon/>
                        </IconButton>

                    </Box>
                    {/* Affichage en mode responsive  */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'theme.typography.h1.fontFamily',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link href="/"  underline="none" color={theme.typography.h1}>
                            {'SPORTACUS'}
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, paddingLeft:'3rem' }}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    sx={{
                                    color:theme.typography.h1.color

                                }}
                                    textAlign="center">
                                    Créer une Party
                                </Typography>
                            </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    sx={{
                                    color:theme.typography.h1.color

                                }}
                                    textAlign="center">
                                    Rejoindre une Party
                                </Typography>
                            </MenuItem>


                            <Typography
                                textAlign="center"
                                variant="h1"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' }, paddingLeft:'5rem',paddingRight:'5rem',
                                    fontFamily: theme.typography.h1,
                                    fontSize: theme.typography.h1,
                                    color: theme.typography.h1,
                                }}
                            >
                                <Link href="/"  underline="none" color={theme.typography.h1}>
                                    {'SPORTACUS'}
                                </Link>
                            </Typography>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                sx={{
                                    color:theme.typography.h1.color
                                }}
                                >
                                    <Link href="/ajouter-lieu" underline="none" color={theme.typography.h1.color} >
                                        {'Ajouter un lieu'}
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                sx={{
                                    color:theme.typography.h1.color
                                }}
                                >
                                    Modifier un lieu
                                </Typography>
                            </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Paramètres utilisateur">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Profil pic">
                                    <AccountCircleIcon/>
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">
                                    <Link href="profil" underline="none" color={theme.typography.h1.color} >
                                    {'Profil'}
                                </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link href="/auth/login" underline="none" color={theme.typography.h1.color} >
                                            {'Connexion'}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
