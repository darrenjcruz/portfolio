import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Projects.css';

function HTML() {
    const [slideIndex1, setSlideIndex1] = useState(0);
    const [slideIndex2, setSlideIndex2] = useState(0);
    
    const titanRadioMearchStoreImages = [
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore1.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore2.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore3.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore4.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore5.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore6.png'),
    ];

    const guiConnectFourImages = [
        require('../../assets/projects/guiConnectFour/guiConnectFour1.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour2.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour3.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour4.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour5.png'),
        require('../../assets/projects/guiConnectFour/guiConnectFour6.png'),
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
                    <Card>
                        <CardMedia
                            component="img"
                            image={titanRadioMearchStoreImages[slideIndex1]}
                            alt={`Slide ${slideIndex1 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(titanRadioMearchStoreImages.length, setSlideIndex1)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(titanRadioMearchStoreImages.length, setSlideIndex1)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h6" component="div">
                            Titan Radio Merch Store
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
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

                        <Typography gutterBottom variant="h6" component="div">
                            GUI Connect Four
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HTML;
