import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import './Home.css';

// Import images for project excerpts
import project1Image from '../../assets/projects/guiConnectFour/guiConnectFour3.png';
import project2Image from '../../assets/projects/recipeFinders/recipeFinders3.png';
import project3Image from '../../assets/projects/othello/othello4.png';

function Home() {
    return (
        <Container className="body" maxWidth="lg">
            <Typography className="title" variant="h2" gutterBottom>
                Welcome to My Portfolio!
            </Typography>

            <Typography variant="body1" paragraph>
                This is the homepage of my portfolio website. Here, you can find information about me, my projects, and how to contact me.
            </Typography>
            
            <Grid container spacing={3}>
                {/* Project 1 excerpt */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" image={project1Image} alt="Project 1" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1 Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="/project1">
                                View Project
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 excerpt */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" image={project2Image} alt="Project 2" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2 Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="/project2">
                                View Project
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 excerpt */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia component="img" image={project3Image} alt="Project 3" />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 3 Title
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique massa quis nunc molestie, sit amet volutpat dolor tristique.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="/project3">
                                View Project
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" href="/projects">
                View All Projects
            </Button>
            <Button variant="contained" color="primary" href="/contact">
                Contact Me
            </Button>
        </Container>
    );
}

export default Home;
