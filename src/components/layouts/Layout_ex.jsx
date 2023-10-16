import React, { useState } from 'react'
import { Alert, Box, Button, Container, Divider, Grid, Paper, Snackbar, Typography, } from '@mui/material';
import ExampleForm from './FormExample';
import CardExample from './CardExample';

export default function Layout_ex() {

    const [open, setOpen] = useState(false);
    const [alertMsn, setAlertMsn] = useState("")
    const [alertColor, setAlertColor] = useState("success")

    const setVariables = (var1, var2) => {
        setAlertMsn(var1)
        setAlertColor(var2)
    }

    const handleAlert = (type) => {
        if (type === "wng") {
            setVariables("Mensaje de warning - Ej: Verificar contraseña!", "warning")
            // setAlertMsn("Mensaje de warning - Ej: Verificar contraseña!")
            // setAlertColor("warning")
        }
        if (type === "scs") {
            setVariables("Mensaje de success - Ej: Se produjeron los cambios con éxito!", "success")
            // setAlertMsn("Mensaje de success - Ej: Se produjeron los cambios con éxito!")
            // setAlertColor("success")
        }
        if (type === "error") {
            setVariables("Mensaje de error - Ej: Se produjo un error", "error")
            // setAlertMsn("Mensaje de error - Ej: Se produjo un error")
            // setAlertColor("error")
        }
        if (type === "info") {
            setVariables("Mensaje de Información - Ej: Nuevos usuarios registrados", "info")
            // setAlertMsn("Mensaje de Información - Ej: Nuevos usuarios registrados")
            // setAlertColor("info")
        }

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Layout - componentes varios
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Grid con 3 columas
                </Typography>
                <Divider sx={{ mb: 3, mt: 3 }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 1 - Size 4</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 2 - Size 4</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 3 - Size 4</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Divider sx={{ mb: 3, mt: 3 }} />
                <Typography variant="h6" gutterBottom>
                    Grid con 6 columas
                </Typography>
                <Divider sx={{ mb: 3, mt: 3 }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2} >
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 1 - Size 2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 2 - Size 2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 3 - Size 2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 4 - Size 2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 5 - Size 2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Col 6 - Size 2</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Box>
                <Typography variant="h6" gutterBottom>
                    Uso de variantes con el theme
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'verdes.light' }}>
                            <Typography variant="h6">Col 1 - Size 6 - Color verde claro</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'naranjas.dark' }}>
                            <Typography variant="h6">Col 2 - Size 6 - Color naranja oscuro</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'verdes.medium' }}>
                            <Typography variant="h6">Col 1 - Size 12 - Color verde intermedio</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6">Typography variant h6</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography variant="h5">Typography variant h5</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h4">Typography variant h4</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography variant="h3">Typography variant h3</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h2">Typography variant h2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography variant="h1">Typography variant h1</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Divider sx={{ mb: 5, mt: 5 }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography sx={(theme) => theme.typography.titulos}>
                                Este es un titulo personalizado.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography sx={(theme) => theme.typography.subtitulos}>
                                Este es un subtítulo personalizado.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography sx={(theme) => theme.typography.parrafos}>
                                Este es texto parrafo personalizado. Este es texto parrafo personalizado. Este es texto parrafo personalizado. Este es texto parrafo personalizado. Lorem
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <Typography sx={(theme) => theme.typography.parrafosColor}>
                                Este es texto parrafo personalizado con color de fondo.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box >
                        <Paper elevation={3} sx={(theme) => ({ borderRadius: theme.shape.borderRadius, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' })} >
                            <Typography sx={(theme) => theme.typography.subtitulos}>
                                Esta es una card con border radius personalizado
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box >
                        <Paper elevation={3} sx={(theme) => ({ borderRadius: theme.shape.borderRadiusMedium, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' })} >
                            <Typography sx={(theme) => theme.typography.subtitulos}>
                                Esta es otra card con border radius personalizado
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box >
                        <Paper elevation={3} sx={(theme) => ({ borderRadius: theme.shape.borderRadiusLarge, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' })} >
                            <Typography sx={(theme) => theme.typography.subtitulos}>
                                Esta es otra card con border radius personalizado
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box >
                        <Paper elevation={3} sx={(theme) => ({ borderRadius: theme.shape.borderRadiusSmall, bgcolor: 'naranjas.medium', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' })} >
                            <Typography sx={(theme) => theme.typography.subtitulos}>
                                Esta es otra card con border radius y color personalizado
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Grid container spacing={2}>
                <Button variant='contained' size='large' sx={{ mr: 1 }}>
                    Botón Contained
                </Button>
                <Button variant='outlined' color='success' sx={{ mr: 1 }} >
                    Botón Outlined
                </Button>
                <Button variant='text' color='info' sx={{ mr: 1 }} >
                    Botón Text
                </Button>
            </Grid>

            {/* ALERTAS */}
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Alertas
            </Typography>
            <Grid container spacing={2}>
                <Button variant="contained" color='success' onClick={() => { handleAlert("scs") }} sx={{ mr: 1 }}>
                    Alerta success
                </Button>
                <Button variant="contained" color='warning' onClick={() => { handleAlert("wng") }} sx={{ mr: 1 }}>
                    Alerta warning
                </Button>
                <Button variant="contained" color='error' onClick={() => { handleAlert("error") }} sx={{ mr: 1 }}>
                    Alerta error
                </Button>
                <Button variant="contained" color='info' onClick={() => { handleAlert("info") }} sx={{ mr: 1 }}>
                    Alerta Información
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alertColor} sx={{ width: '100%' }}>
                        {alertMsn}
                    </Alert>
                </Snackbar>
            </Grid>
            {/* ALERTAS */}

            {/* FORM Y VALIDACIÓN */}
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Validaciones y Formulario
            </Typography>
            <Grid container spacing={2}>
                <ExampleForm handleAlert={handleAlert} />
            </Grid>
            {/* FORM Y VALIDACIÓN */}

            {/* CARD CON IMAGEN*/}
            <Divider sx={{ mb: 3, mt: 3 }} />
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Ejemplo Card
            </Typography>
            <Grid container spacing={2}>
                <CardExample />
            </Grid>
            {/* CARD CON IMAGEN*/}
            <Divider sx={{ mb: 3, mt: 3 }} />
        </Container>
    )
}
