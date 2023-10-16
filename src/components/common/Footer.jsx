import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.main', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Mi Sitio
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Descripción de mi sitio
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
        </Typography>
        <Box mt={3} textAlign="center">
          <Link href="#" color="textSecondary">Términos y condiciones</Link>
          {' | '}
          <Link href="#" color="textSecondary">Política de privacidad</Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;