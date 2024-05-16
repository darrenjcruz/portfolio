import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <div className='FooterWrapper'>
            <div className='Footer'>
                <Container maxWidth="xl">
                    <Stack>
                        <Container maxWidth="md">
                            <Grid container spacing={4} justifyContent="space-between">
                                {/* Work with me section */}
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={2}>
                                        <Link to='/ContactMe' className="FooterLink">
                                            <Typography variant="h6">Work with me</Typography>
                                        </Link>

                                        <Container>
                                            <Stack>
                                                <Typography variant="body1">Interested in collaborating or have a project in mind?</Typography>
                                                <Typography variant="body1">Contact me at darrenjcruz@gmail.com</Typography>
                                            </Stack>
                                        </Container>
                                    </Stack>
                                </Grid>

                                {/* Social section */}
                                <Grid item xs={12} md={6}>
                                    <Container>
                                        <Stack>
                                            <Typography variant="h6">Connect with me</Typography>
                                            <Divider />
                                            <Stack direction="row" spacing={2} alignItems="center">
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

                        <Typography variant="body2" align="center">© 2024 Darren Cruz</Typography>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
