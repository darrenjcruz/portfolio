import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Projects.css';

function CPlusPlus() {
    const [slideIndex1, setSlideIndex1] = useState(0);

    const recipeFindersImages = [
        require('../../assets/projects/recipeFinders/recipeFinders1.png'),
        require('../../assets/projects/recipeFinders/recipeFinders2.png'),
        require('../../assets/projects/recipeFinders/recipeFinders3.png'),
        require('../../assets/projects/recipeFinders/recipeFinders4.png'),
        require('../../assets/projects/recipeFinders/recipeFinders5.png'),
        require('../../assets/projects/recipeFinders/recipeFinders6.png'),
        require('../../assets/projects/recipeFinders/recipeFinders7.png'),
    ]

    const nextSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % length);
    };

    const prevSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="div">Check back in the future, more projects will be added as they are completed!</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CPlusPlus;
