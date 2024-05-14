import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

function ContactMe() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                    <Grid item xs={2}>
                        <Stack spacing={12}>
                            <Typography variant="h6">Inquiries</Typography>

                            <p>Please fill out the form on the right or email me directly at darrenjcruz@gmail.com</p>

                            <p>(Please check Spam folders for my response.)</p>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={2}>

                    </Grid>

                    <Grid item xs={4}>
                        {/* <Box component="form"> */}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ContactMe;