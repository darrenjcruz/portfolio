// ProjectCard.js

import React, { useState } from 'react';
import { Card, CardMedia, IconButton, Box, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function ProjectCard({ project }) {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % length);
    };

    const prevSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <Card sx={{ backgroundColor: '#353535' }}>

            {/* Project Images */}
            <CardMedia
                component="img"
                image={project.images[slideIndex]}
                alt={`Slide ${slideIndex + 1}`}
            />

            {/* Navigation buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={() => prevSlide(project.images.length, setSlideIndex)}>
                    <ArrowBack />
                </IconButton>

                <IconButton onClick={() => nextSlide(project.images.length, setSlideIndex)}>
                    <ArrowForward />
                </IconButton>
            </Box>

            {/* Project title */}
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px' }}>
                {project.title}
            </Typography>
        </Card>
    );
}

export default ProjectCard;