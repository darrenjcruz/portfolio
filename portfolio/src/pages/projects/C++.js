import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './Projects.css';

function CPlusPlus() {
    return (
        // Container for the entire component
        <Container maxWidth="lg">
            {/* Grid container with spacing */}
            <Grid container spacing={4}>
                {/* Grid item taking full width */}
                <Grid item xs={12}>
                    {/* Typography component for displaying a message */}
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop: '10px'  }}>
                        Check back in the future, more projects will be added as they are completed!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CPlusPlus;
