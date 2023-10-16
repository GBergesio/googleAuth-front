import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mi Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Item de Estadísticas */}
          <Grid item xs={12} md={4} >
            <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <BarChartIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Estadísticas</Typography>
            </Paper>
          </Grid>
          {/* Item de Listas */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ListAltIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Listas</Typography>
            </Paper>
          </Grid>
          {/* Item de Usuarios */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PeopleIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Usuarios</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard;