import React from 'react';
import { Container, Grid, Stack, Card, CardMedia, CardActionArea, Typography } from '@mui/material';

function AboutMe() {
    return (
        <>
            <Container maxWidth = "lg">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <img src={require("../../assets/ProfessionalPhoto.jpg")} alt="Headshot of Darren J. Cruz" width="500" heigh="500"/>
                    </Grid>

                    <Grid item xs={4}>
                        <Stack spacing={1}>
                            <h1>Darren Cruz</h1>
                            <p>I am a Computer Science major at California State University, Fullerton. I worked as a STEAM instructor, teaching kids in elementary and middle school around the Orange County area.</p>
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <h1>Skills</h1>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/python.png")} alt="Python" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Python
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/c-.png")} alt="C++" />
                                <Typography gutterBottom variant="h5" component="div">
                                    C++
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/css-3.png")} alt="CSS 3" />
                                <Typography gutterBottom variant="h5" component="div">
                                    CSS
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/html-5.png")} alt="HTML 5" />
                                <Typography gutterBottom variant="h5" component="div">
                                    HTML
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/js.png")} alt="JavaScript" />
                                <Typography gutterBottom variant="h5" component="div">
                                    JavaScript
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/react.png")} alt="React" />
                                <Typography gutterBottom variant="h5" component="div">
                                    React
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" image={require("../../assets/swift.png")} alt="Swift" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Swift/SwiftUI
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={8}>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutMe;