// AboutMe.js

import React, { useEffect } from 'react';
import { Container, Grid, Stack, Card, CardMedia, CardActionArea, Typography, Avatar, Paper, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './AboutMe.css';

function AboutMe() {
    useEffect(() => {
        document.title = "About Darren Cruz"
    }, []);

    return (
        <>
            {/* Main container */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItem="center">
                    {/* Image section */}
                    <Grid className='Image' item xs={12} sm={6} md={6}>
                        {/* Avatar image */}
                        <Avatar variant="rounded" alt="Darren Cruz" src={require("../../assets/ProfessionalPhoto.jpg")} sx={{ width: { xs: 300, sm: 400, md: 500 }, height: { xs: 300, sm: 400, md: 500 }}} />
                    </Grid>

                    {/* Description section */}
                    <Grid className='Description' item xs={12} sm={6} md={6}>
                        <Stack spacing={1}>
                            {/* Name and description */}
                            <Typography variant="h2">Darren J. Cruz</Typography>
                            <Typography variant="body1">
                                I am a Computer Science major at California State University, Fullerton. 
                                I worked as a STEAM instructor, teaching kids in elementary and middle school around the Orange County area.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button fullWidth variant='contained' color='primary' href='/files/DarrenCruz_Resume_Master.pdf' download startIcon={<DownloadIcon />}>
                                        Complete History
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button fullWidth variant='contained' color='primary' href='/files/DarrenCruz_Resume_2024.pdf' download startIcon={<DownloadIcon />}>
                                        Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>

                    {/* Skills title */}
                    <Grid className='Title' item xs={12}>
                        <Typography gutterBottom variant="h3" component="div">
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
