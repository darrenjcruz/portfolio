import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, CardActions, Stack } from '@mui/material';
import './Home.css';

// Import images for project excerpts
import project1Image from '../../assets/projects/guiConnectFour/guiConnectFour3.png';
import project2Image from '../../assets/projects/recipeFinders/recipeFinders3.png';
import project3Image from '../../assets/projects/othello/othello4.png';

function Home() {
    return (
        <Container className="body" maxWidth="lg">
            <Stack>
                <Typography className="title" variant="h2" gutterBottom>
                    Welcome to My Portfolio!
                </Typography>

                <Typography variant="body1" paragraph>
                    This is the homepage of my portfolio website. Here, you can find information about me, my projects, and how to contact me.
                </Typography>
            
                <Grid container spacing={3} justifyContent="center">
                    {/* Project excerpts */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project1Image} alt="Project 1" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    GUI Connect Four
                                </Typography>
                                {/* <Typography variant="body2" color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary" href="/project1">
                                    View Project
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project2Image} alt="Project 2" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    Recipe Finders Web App
                                </Typography>
                                {/* <Typography variant="body2" color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary" href="/project2">
                                    View Project
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project3Image} alt="Project 3" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    Othello iOs App
                                </Typography>
                                {/* <Typography variant="body2" color="textSecondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary" href="/project3">
                                    View Project
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                {/* Buttons */}
                <Grid container spacing={2} justifyContent="center" style={{ marginTop: '16px' }}>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} href="/projects">
                            View All Projects
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} href="/contact">
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Home;
