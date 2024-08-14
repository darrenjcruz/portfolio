// HTML.js

import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { HTMLProjects } from './ProjectData';
import './Projects.css';

function HTML() {
    useEffect(() => {
        document.title = "Darren Cruz's Projects: HTML/JavaScript/React"
    })

    return (
        // Container for the entire component
        <Container maxWidth="lg">
            {/* Grid container with spacing */}
            <Grid container spacing={4}>
                {/* Projects */}
                {HTMLProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}

                {/* Message indicating more projects will be added */}
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                        Check back in the future, more projects will be added as they are completed!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HTML;
