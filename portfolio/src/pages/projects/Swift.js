import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Projects.css';

function Swift() {
    const [slideIndex1, setSlideIndex1] = useState(0);
    const [slideIndex2, setSlideIndex2] = useState(0);
    const [slideIndex3, setSlideIndex3] = useState(0);
    const [slideIndex4, setSlideIndex4] = useState(0);
    const [slideIndex5, setSlideIndex5] = useState(0);
    const [slideIndex6, setSlideIndex6] = useState(0);
    
    const weSplitImages = [
        require('../../assets/projects/weSplit/weSplit1.png'),
        require('../../assets/projects/weSplit/weSplit2.png'),
        require('../../assets/projects/weSplit/weSplit3.png'),
        require('../../assets/projects/weSplit/weSplit4.png'),
    ];

    const guessTheFlagImages = [
        require('../../assets/projects/guessTheFlag/guessTheFlag1.png'),
        require('../../assets/projects/guessTheFlag/guessTheFlag2.png'),
        require('../../assets/projects/guessTheFlag/guessTheFlag3.png'),
        require('../../assets/projects/guessTheFlag/guessTheFlag4.png'),
        require('../../assets/projects/guessTheFlag/guessTheFlag5.png'),
    ]

    const wordScrambleImages = [
        require('../../assets/projects/wordScramble/wordScramble1.png'),
        require('../../assets/projects/wordScramble/wordScramble2.png'),
        require('../../assets/projects/wordScramble/wordScramble3.png'),
        require('../../assets/projects/wordScramble/wordScramble4.png'),
        require('../../assets/projects/wordScramble/wordScramble5.png'),
        require('../../assets/projects/wordScramble/wordScramble6.png'),
        require('../../assets/projects/wordScramble/wordScramble7.png'),
    ]

    const iExpenseImages = [
        require('../../assets/projects/iExpense/iExpense1.png'),
        require('../../assets/projects/iExpense/iExpense2.png'),
        require('../../assets/projects/iExpense/iExpense3.png'),
    ]

    const moonshotImages = [
        require('../../assets/projects/moonshot/moonshot1.png'),
        require('../../assets/projects/moonshot/moonshot2.png'),
        require('../../assets/projects/moonshot/moonshot3.png'),
        require('../../assets/projects/moonshot/moonshot4.png'),
        require('../../assets/projects/moonshot/moonshot5.png'),
    ]

    const othelloImages = [
        require('../../assets/projects/othello/othello1.png'),
        require('../../assets/projects/othello/othello2.png'),
        require('../../assets/projects/othello/othello3.png'),
        require('../../assets/projects/othello/othello4.png'),
        require('../../assets/projects/othello/othello5.png'),
        require('../../assets/projects/othello/othello6.png'),
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
                            image={weSplitImages[slideIndex1]}
                            alt={`Slide ${slideIndex1 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(weSplitImages.length, setSlideIndex1)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(weSplitImages.length, setSlideIndex1)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            WeSplit iOs App
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={guessTheFlagImages[slideIndex2]}
                            alt={`Slide ${slideIndex2 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(guessTheFlagImages.length, setSlideIndex2)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(guessTheFlagImages.length, setSlideIndex2)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Guess The Flag iOs App
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={wordScrambleImages[slideIndex3]}
                            alt={`Slide ${slideIndex3 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(wordScrambleImages.length, setSlideIndex3)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(wordScrambleImages.length, setSlideIndex3)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Word Scramble iOs App
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={iExpenseImages[slideIndex4]}
                            alt={`Slide ${slideIndex4 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(iExpenseImages.length, setSlideIndex4)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(iExpenseImages.length, setSlideIndex4)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            iExpense iOs App
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={moonshotImages[slideIndex5]}
                            alt={`Slide ${slideIndex5 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(moonshotImages.length, setSlideIndex5)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(moonshotImages.length, setSlideIndex5)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Moonshot iOs App
                        </Typography>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ backgroundColor: '#353535' }}>
                        <CardMedia
                            component="img"
                            image={othelloImages[slideIndex6]}
                            alt={`Slide ${slideIndex6 + 1}`}
                        />

                        <Container className="card">
                            <IconButton onClick={() => prevSlide(othelloImages.length, setSlideIndex6)}>
                                <ArrowBack />
                            </IconButton>
                            <IconButton onClick={() => nextSlide(othelloImages.length, setSlideIndex6)}>
                                <ArrowForward />
                            </IconButton>
                        </Container>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                            Othello iOs App
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

export default Swift;
