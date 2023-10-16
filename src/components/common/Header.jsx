import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <AppBar position="static" sx={(theme) => ({ bgcolor: 'naranjas.medium' })}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Nombre sitio
                </Typography>
                <Button color="inherit" href='/'>Inicio</Button>
                <Button color="inherit" href='/dashboard'>Dashboard</Button>
                <Button color="inherit" href='/layout'>Layout</Button>
                <Button color="inherit" href='/publicaciones'>Publicaciones</Button>
                <Button color="inherit" href='/login'>Login</Button>
                <Button color="inherit" href='/proveedores'>Proveedores</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;