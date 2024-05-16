import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Projects.css';

function HTML() {
    // State variables for controlling slide index for each project
    const [slideIndex1, setSlideIndex1] = useState(0);
    const [slideIndex2, setSlideIndex2] = useState(0);
    const [slideIndex3, setSlideIndex3] = useState(0);
    
    // Images for each project
    const titanRadioMearchStoreImages = [
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore1.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore2.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore3.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore4.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore5.png'),
        require('../../assets/projects/titanRadioMerchStore/titanRadioMerchStore6.png'),
    ];

    const quizzicalImages = [
        require('../../assets/projects/quizzical/quizzical1.png'),
        require('../../assets/projects/quizzical/quizzical2.png'),
        require('../../assets/projects/quizzical/quizzical3.png'),
    ]

    const recipeFindersImages = [
        require('../../assets/projects/recipeFinders/recipeFinders1.png'),
        require('../../assets/projects/recipeFinders/recipeFinders2.png'),
        require('../../assets/projects/recipeFinders/recipeFinders3.png'),
        require('../../assets/projects/recipeFinders/recipeFinders4.png'),
        require('../../assets/projects/recipeFinders/recipeFinders5.png'),
        require('../../assets/projects/recipeFinders/recipeFinders6.png'),
        require('../../assets/projects/recipeFinders/recipeFinders7.png'),
    ]

    // Function to handle next slide
    const nextSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % length);
    };

    // Function to handle previous slide
    const prevSlide = (length, setSlideIndex) => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {/* Titan Radio Merch Store Project */}
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}> 
                        <CardMedia
                            component="img"
                            image={titanRadioMearchStoreImages[slideIndex1]}
                            alt={`Slide ${slideIndex1 + 1}`}
                        />

                        {/* Navigation buttons for slides */}
                        <Container className="card">
                            <IconButton onClick={() => prevSlide(titanRadioMearchStoreImages.length, setSlideIndex1)}>
                                <ArrowBack />
                            </IconButton>

                            <IconButton onClick={() => nextSlide(titanRadioMearchStoreImages.length, setSlideIndex1)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        {/* Project title */}
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Titan Radio Merch Store
                        </Typography>
                    </Card>
                </Grid>

                {/* Quizzical Website Project */}
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={quizzicalImages[slideIndex2]}
                            alt={`Slide ${slideIndex2 + 1}`}
                        />

                        {/* Navigation buttons for slides */}
                        <Container className="card">
                            <IconButton onClick={() => prevSlide(quizzicalImages.length, setSlideIndex2)}>
                                <ArrowBack />
                            </IconButton>

                            <IconButton onClick={() => nextSlide(quizzicalImages.length, setSlideIndex2)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        {/* Project title */}
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Quizzical Website
                        </Typography>
                    </Card>
                </Grid>

                {/* Recipe Finders Web Application Project */}
                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={recipeFindersImages[slideIndex3]}
                            alt={`Slide ${slideIndex3 + 1}`}
                        />

                        {/* Navigation buttons for slides */}
                        <Container className="card">
                            <IconButton onClick={() => prevSlide(recipeFindersImages.length, setSlideIndex3)}>
                                <ArrowBack />
                            </IconButton>
                            
                            <IconButton onClick={() => nextSlide(recipeFindersImages.length, setSlideIndex3)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        {/* Project title */}
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Recipe Finders Web Application
                        </Typography>
                    </Card>
                </Grid>

                {/* Message indicating more projects will be added */}
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                        Check back in the future, more projects will be added as they are completed!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HTML;
