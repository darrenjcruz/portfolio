import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Projects.css';

function Python() {
    const [slideIndex1, setSlideIndex1] = useState(0);
    const [slideIndex2, setSlideIndex2] = useState(0);
    const [slideIndex3, setSlideIndex3] = useState(0);
    const [slideIndex4, setSlideIndex4] = useState(0);
    
    const cmdConnectFourImages = [
        require('../../assets/projects/cmdConnectFour/cmdConnectFour1.png'),
        require('../../assets/projects/cmdConnectFour/cmdConnectFour2.png'),
        require('../../assets/projects/cmdConnectFour/cmdConnectFour3.png')
    ];

    const guiConnectFourImages = [
        require('../../assets/projects/guiConnectFour/guiConnectFour1.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour2.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour3.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour4.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour5.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour6.png'),
    ]

    const cmdBlackjackImages = [
        require('../../assets/projects/cmdBlackjack/cmdBlackjack1.png'),
        require('../../assets/projects/cmdBlackjack/cmdBlackjack2.png'),
        require('../../assets/projects/cmdBlackjack/cmdBlackjack3.png'),
    ]

    const spaceInvadersImages = [
        require('../../assets/projects/spaceInvaders/spaceInvaders1.png'),
        require('../../assets/projects/spaceInvaders/spaceInvaders2.png'),
        require('../../assets/projects/spaceInvaders/spaceInvaders3.png'),
        require('../../assets/projects/spaceInvaders/spaceInvaders4.png'),
        require('../../assets/projects/spaceInvaders/spaceInvaders5.png'),
        require('../../assets/projects/spaceInvaders/spaceInvaders6.png'),
    ]

    const nextSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % length);
    };

    const prevSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={cmdConnectFourImages[slideIndex1]}
                            alt={`Slide ${slideIndex1 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(cmdConnectFourImages.length, setSlideIndex1)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(cmdConnectFourImages.length, setSlideIndex1)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            CMD Connect Four
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={guiConnectFourImages[slideIndex2]}
                            alt={`Slide ${slideIndex2 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(guiConnectFourImages.length, setSlideIndex2)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(guiConnectFourImages.length, setSlideIndex2)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            GUI Connect Four
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={cmdBlackjackImages[slideIndex3]}
                            alt={`Slide ${slideIndex3 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(cmdBlackjackImages.length, setSlideIndex3)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(cmdBlackjackImages.length, setSlideIndex3)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            CMD Blackjack
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={spaceInvadersImages[slideIndex4]}
                            alt={`Slide ${slideIndex4 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(spaceInvadersImages.length, setSlideIndex4)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(spaceInvadersImages.length, setSlideIndex4)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Space Invaders
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>Check back in the future, more projects will be added as they are completed!</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Python;
