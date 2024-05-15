import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <div className='FooterWrapper'>
            <div className='Footer'>
                <Container maxWidth="xl">
                    <Container maxWidth="md">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Stack spacing={12}>
                                    <Link to='/ContactMe'>
                                        <Typography variant="h6">Work with me</Typography>
                                    </Link>

                                    <Container>
                                        <Typography variant="h6">Contact</Typography>
                                        <Divider></Divider>
                                        <p>darrenjcruz@gmail.com</p>
                                    </Container>
                                </Stack>
                            </Grid>

                            <Grid item xs={6}>
                                <Container>
                                        <Typography variant="h6">Social</Typography>
                                        <Divider></Divider>
                                        <IconButton href="https://www.linkedin.com/in/cruzjdarren/">
                                            <Avatar variant='rounded' alt="LinkedIn" src={require("../../assets/linkedin.png")} />
                                        </IconButton>
                                    </Container>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
