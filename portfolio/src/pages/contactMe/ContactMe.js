import React, { useRef } from "react";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tg2a5an', 'template_14val5d', form.current, {
            publicKey: 'THRJTVSeltgv-0DB0'
        })
        .then(
            () => {
                console.log('success!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                        <Typography variant="h6" component='p'>Inquiries</Typography>
                        <Typography>Please fill out the form on the right or email me directly at darrenjcruz@gmail.com</Typography>
                        <Typography>(Please check Spam folders for my response.)</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="form" ref={form} onSubmit={sendEmail}>
                        <TextField label="Name:*" variant="outlined" type='text' name='user_name' />
                        <TextField label="Email Address:*" variant="outlined" type='email' name='user_email' />
                        <TextField label="Subject:" variant="outlined" type='text' name='subject' />
                        <TextField label="Your Message:*" multiline minRows={4} fullWidth name='message' />
                        <Button variant="contained" type="submit">Send</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactMe;
