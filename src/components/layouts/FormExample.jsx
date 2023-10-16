import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Container, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import schemaTest from '../../schemas/schemaTest';

function ExampleForm({ handleAlert }) {
    const formik = useFormik({
        // `initialValues` define los valores iniciales de los campos en el formulario.
        // Es esencial que todos los campos del formulario estén representados aquí, incluso si inicialmente están vacíos.
        initialValues: {
            textInput: '',
            numberInput: '',
            email: '',
            categoria: '',
        },
        // Definimos el schema que queremos utilizar
        validationSchema: schemaTest,
        onSubmit: (values) => {
            // Lógica de envío del formulario
            handleAlert("scs")
            console.log('Formulario enviado con éxito:', values);
        },
    });

    return (
        <Container>
            <Typography variant="h6" gutterBottom>Formulario de Prueba con Formik y validación con Yup</Typography>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        color='primary'
                        fullWidth
                        margin="normal"
                        label="Texto"
                        name="textInput"
                        // `value`: Define el valor actual del campo. En este caso, está vinculado al estado gestionado por `formik`.
                        value={formik.values.textInput}
                        // `onChange`: Manejador para actualizar el valor del campo en el estado cuando el usuario escribe en el input.
                        onChange={formik.handleChange}
                        // `onBlur`: Manejador que actualiza la información de "touched" en el estado de `formik`, indicando que el usuario ha interactuado con este campo.
                        onBlur={formik.handleBlur}
                        // `error`: Determina si el campo debe mostrar un estado de error. Se muestra si el campo ha sido "tocado" y hay un error asociado.
                        error={formik.touched.textInput && Boolean(formik.errors.textInput)}
                        // `helperText`: Muestra el mensaje de error (si lo hay) cuando el campo ha sido "tocado".
                        helperText={formik.touched.textInput && formik.errors.textInput}

                    />
                </div>

                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Número"
                        name="numberInput"
                        type="number"
                        value={formik.values.numberInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.numberInput && Boolean(formik.errors.numberInput)}
                        helperText={formik.touched.numberInput && formik.errors.numberInput}
                    />
                </div>

                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>

                <Box sx={{ minWidth: 120, mb: 3, mt: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categoría"
                            name="categoria"
                            value={formik.values.categoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                        >
                            <MenuItem value="cat1">Categoría 1</MenuItem>
                            <MenuItem value="cat2">Categoría 2</MenuItem>
                            <MenuItem value="cat3">Categoría 3</MenuItem>
                        </Select>
                        {formik.touched.categoria && <Typography variant='caption' color='error'>{formik.errors.categoria}</Typography>}
                    </FormControl>
                </Box>

                <Button variant="contained" color="primary" type="submit">
                    Enviar
                </Button>
            </form>
        </Container>
    );
}

export default ExampleForm;
