// AboutMe.js

import React, { useEffect } from 'react';
import { Container, Grid, Stack, Card, CardMedia, CardActionArea, Typography, Avatar, Paper } from '@mui/material';
import './AboutMe.css';

function AboutMe() {
    useEffect(() => {
        document.title = "About Darren Cruz"
    })

    return (
        <>
            {/* Main container */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItem="center">
                    {/* Image section */}
                    <Grid className='Image' item xs={12} sm={6} md={6}>
                        {/* Avatar image */}
                        <Avatar variant="rounded" alt="Darren Cruz" src={require("../../assets/ProfessionalPhoto.jpg")} sx={{ width: 500, height: 500 }} />
                    </Grid>

                    {/* Description section */}
                    <Grid className='Description' item xs={12} sm={6} md={6}>
                        <Stack spacing={1}>
                            {/* Name and description */}
                            <h1>Darren J. Cruz</h1>
                            <p>I am a Computer Science major at California State University, Fullerton. I worked as a STEAM instructor, teaching kids in elementary and middle school around the Orange County area.</p>
                        </Stack>
                    </Grid>

                    {/* Skills title */}
                    <Grid className='Title' item xs={12}>
                        <Typography gutterBottom variant="h2" component="div">
                            Skills
                        </Typography>
                    </Grid>

                    {/* Skills cards */}
                    {["Python", "C++", "CSS", "HTML", "JavaScript", "React", "SwiftUI"].map((skill, index) => (
                        <Grid key={index} item xs={6} sm={4} md={3}>
                            <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                                <Card sx={{ bgcolor: '#353535' }}>
                                    <CardActionArea>
                                        {/* Skill image */}
                                        <CardMedia component="img" image={require(`../../assets/${skill.toLowerCase()}.png`)} alt={skill} />
                                        {/* Skill name */}
                                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px' }}>
                                            {skill}
                                        </Typography>
                                    </CardActionArea>
                                </Card>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default AboutMe;
