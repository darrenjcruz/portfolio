// Home.js

import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';
import { AllProjects } from '../projects/ProjectData';
import './Home.css';

function Home() {
    const [featuredProjects, setfeaturedProjects] = useState([]);
    const [favoriteProjects, setFavoriteProjects] = useState([]);
    const excludedProjects = [
        // Project titles of projects that will be excluded from the random selection.
        'Space Invaders',
        'Recipe Finders Web Application',
        'Othello',
    ];

    useEffect(() => {
        document.title = "Darren Cruz's Portfolio"

        // Function to select random projects
        const selectfeaturedProjects = () => {
            const availableProjects = AllProjects.filter(project => !excludedProjects.includes(project.title));
            const shuffledProjects = availableProjects.sort(() => 0.5 - Math.random());
            const selectedProjects = shuffledProjects.slice(0, 3);
            setfeaturedProjects(selectedProjects);
        }

        const favoriteProject1 = AllProjects.filter(project => excludedProjects.includes(project.title));
        setFavoriteProjects(favoriteProject1);

        selectfeaturedProjects();
    }, []);

    return (
        <Container className="body" maxWidth="lg">
            {/* Stack for organizing content */}
            <Stack>
                {/* Title */}
                <Typography className="title" variant="h2" gutterBottom>
                    Welcome to My Portfolio!
                </Typography>

                {/* Introduction */}
                <Typography className="paragraph" variant="body1" paragraph>
                    This is the homepage of my portfolio website. Here, you can find information about me, my projects, and how to contact me.
                </Typography>

                {/* Favorite Projects */}
                <Typography className="title" variant="h4" gutterBottom>
                    Favorite Projects
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {favoriteProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>

                {/* Featured Projects */}
                <Typography className="title" variant="h4" gutterBottom>
                    Featured Projects
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {featuredProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>

                {/* Buttons for viewing all projects and contacting */}
                <Grid container spacing={2} justifyContent="center" style={{ marginTop: '16px' }}>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} component={Link} to="/portfolio/Projects">
                            View All Projects
                        </Button>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} component={Link} to="/portfolio/ContactMe">
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Home;
