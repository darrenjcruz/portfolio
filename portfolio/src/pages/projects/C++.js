// C++.js

import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { CPPProjects } from './ProjectData';
import './Projects.css';

function CPlusPlus() {
    useEffect(() => {
        document.title = "Darren Cruz's Projects: C++"
    })

    return (
        // Container for the entire component
        <Container maxWidth="lg">
            {/* Grid container with spacing */}
            <Grid container spacing={4}>
                {/* Projects */}
                {CPPProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    {/* Typography component for displaying a message */}
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                        Check back in the future, more projects will be added as they are completed!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CPlusPlus;
