import React, { useState, useRef } from 'react';
import { Container, Grid, Stack, TextField, Typography, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tg2a5an', 'template_14val5d', formRef.current, {
            publicKey: 'THRJTVSeltgv-0DB0'
        })
        .then(
            () => {
                setOpenSuccessSnackbar(true);
                setOpenErrorSnackbar(false);
                console.log('success!');
            },
            (error) => {
                setOpenErrorSnackbar(true);
                setOpenSuccessSnackbar(false);
                console.log('FAILED...', error.text);
            },
        );
    };

    const handleCloseSuccessSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccessSnackbar(false);
    };

    const handleCloseErrorSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenErrorSnackbar(false);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" component='p'>Inquiries</Typography>
                    <Typography>Please fill out the form on the right or email me directly at darrenjcruz@gmail.com</Typography>
                    <Typography>(Please check Spam folders for my response.)</Typography>
                </Grid>

                <Grid item xs={12}>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <Stack spacing={2}>
                            <TextField label="Name" variant="outlined" fullWidth name='user_name' required />
                            <TextField label="Email Address" variant="outlined" fullWidth name='user_email' type='email' required />
                            <TextField label="Subject" variant="outlined" fullWidth name='subject' />
                            <TextField label="Your Message" multiline minRows={4} variant="outlined" fullWidth name='message' required />
                            <Button variant="contained" type="submit" fullWidth style={{ backgroundColor: '#251F47', color: '#fff' }}>Send</Button>
                        </Stack>
                    </form>
                </Grid>
            </Grid>

            <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
                <Alert onClose={handleCloseSuccessSnackbar} severity="success">
                    Email sent successfully!
                </Alert>
            </Snackbar>
            
            <Snackbar open={openErrorSnackbar} autoHideDuration={6000} onClose={handleCloseErrorSnackbar}>
                <Alert onClose={handleCloseErrorSnackbar} severity="error">
                    Failed to send email. Please try again later.
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default ContactMe;
