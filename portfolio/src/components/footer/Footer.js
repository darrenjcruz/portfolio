// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <div className='FooterWrapper'>
            <div className='Footer'>
                {/* Container for the footer content */}
                <Container maxWidth="xl">
                    <Stack>
                        {/* Container for the main content */}
                        <Container maxWidth="md">
                            {/* Grid for arranging content */}
                            <Grid container spacing={4} justifyContent="space-between">
                                {/* Work with me section */}
                                <Grid item xs={12} md={6}>
                                    {/* Stack for vertically arranging content */}
                                    <Stack spacing={2}>
                                        {/* Link to contact page */}
                                        <Link to='/portfolio/ContactMe' className="FooterLink">
                                            <Typography variant="h6">Work with me</Typography>
                                        </Link>

                                        {/* Container for text content */}
                                        <Container>
                                            {/* Stack for vertically arranging content */}
                                            <Stack>
                                                {/* Text content */}
                                                <Typography variant="body1">Interested in collaborating or have a project in mind?</Typography>
                                                <Typography variant="body1">Contact me at darrenjcruz@gmail.com</Typography>
                                            </Stack>
                                        </Container>
                                    </Stack>
                                </Grid>

                                {/* Social section */}
                                <Grid item xs={12} md={6}>
                                    {/* Container for social media links */}
                                    <Container>
                                        {/* Stack for vertically arranging content */}
                                        <Stack>
                                            {/* Title for social media links */}
                                            <Typography variant="h6">Connect with me</Typography>

                                            {/* Divider for visual separation */}
                                            <Divider />
                                            
                                            {/* Stack for arranging social media icons */}
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                {/* LinkedIn icon */}
                                                <IconButton href="https://www.linkedin.com/in/cruzjdarren/" target="_blank" rel="noopener noreferrer">
                                                    <Avatar variant='rounded' alt="LinkedIn" src={require("../../assets/linkedin.png")} />
                                                </IconButton>
                                                {/* Add more social media icons here */}
                                            </Stack>
                                        </Stack>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Container>

                        {/* Footer text */}
                        <Typography variant="body2" align="center">© 2024 Darren Cruz</Typography>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
