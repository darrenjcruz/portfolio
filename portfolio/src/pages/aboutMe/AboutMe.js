import React from 'react';
import { Container, Grid, Stack, Card, CardMedia, CardActionArea, Typography, Avatar, Paper } from '@mui/material';
import './AboutMe.css';

function AboutMe() {
    return (
        <>
            <Container maxWidth = "lg">
                <Grid container spacing={4} alignItem="center">
                    <Grid className='Image' item xs={12} sm={6} md={6}>
                        <Avatar variant="rounded" alt="Darren Cruz" src={require("../../assets/ProfessionalPhoto.jpg")} sx={{ width: 500, height: 500 }} />
                    </Grid>

                    <Grid className='Description' item xs={12} sm={6} md={6}>
                        <Stack spacing={1}>
                            <h1>Darren J. Cruz</h1>
                            <p>I am a Computer Science major at California State University, Fullerton. I worked as a STEAM instructor, teaching kids in elementary and middle school around the Orange County area.</p>
                        </Stack>
                    </Grid>

                    <Grid className='Title'item xs={12}>
                        <Typography gutterBottom variant="h2" component="div">
                            Skills
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/python.png")} alt="Python" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        Python
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/c-.png")} alt="C++" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        C++
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/css-3.png")} alt="CSS 3" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        CSS
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/html-5.png")} alt="HTML 5" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        HTML
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/js.png")} alt="JavaScript" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        JavaScript
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/react.png")} alt="React" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        React
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Paper sx={{ backgroundColor: '#353535' }} elevation={3}>
                            <Card sx={{ bgcolor: '#353535' }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={require("../../assets/swift.png")} alt="Swift" />
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                                        Swift/SwiftUI
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutMe;