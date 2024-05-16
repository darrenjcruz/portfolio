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
            {/* Stack for organizing content */}
            <Stack>
                {/* Title */}
                <Typography className="title" variant="h2" gutterBottom>
                    Welcome to My Portfolio!
                </Typography>

                {/* Introduction */}
                <Typography variant="body1" paragraph>
                    This is the homepage of my portfolio website. Here, you can find information about me, my projects, and how to contact me.
                </Typography>
            
                {/* Grid for project excerpts */}
                <Grid container spacing={3} justifyContent="center">
                    {/* Project 1 excerpt */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project1Image} alt="Project 1" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    GUI Connect Four
                                </Typography>
                            </CardContent>
                            
                            <CardActions>
                                {/* Button for viewing project */}
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Project 2 excerpt */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project2Image} alt="Project 2" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    Recipe Finders Web App
                                </Typography>
                            </CardContent>

                            <CardActions>
                                {/* Button for viewing project */}
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Project 3 excerpt */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#353535' }}>
                            <CardMedia component="img" image={project3Image} alt="Project 3" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                    Othello iOs App
                                </Typography>
                            </CardContent>

                            <CardActions>
                                {/* Button for viewing project */}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                {/* Buttons for viewing all projects and contacting */}
                <Grid container spacing={2} justifyContent="center" style={{ marginTop: '16px' }}>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} href="/Projects">
                            View All Projects
                        </Button>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }} href="/ContactMe">
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
}

export default Home;
