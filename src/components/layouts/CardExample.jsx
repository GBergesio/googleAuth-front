import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton, Box } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

function CardExample() {

  const images = [
    'https://pbs.twimg.com/media/D0CLsuWX0AAPiKK.jpg',
    'https://i.pinimg.com/originals/97/99/b4/9799b40dd11be031c4dcad911c1eb0db.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card sx={{ width: "500px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Título de la Tarjeta
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Categoría: Ejemplo
        </Typography>
      </CardContent>

      <Box position="relative">
        <CardMedia
          component="img"
          height="350"
          image={images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
        />
        <IconButton onClick={handlePrev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
          <NavigateBefore />
        </IconButton>
        <IconButton onClick={handleNext} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
          <NavigateNext />
        </IconButton>
      </Box>
    </Card>
  );
}

export default CardExample;
