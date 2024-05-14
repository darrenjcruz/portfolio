import  React from 'react';
import { Skeleton, Stack, Container } from "@mui/material";

function Home() {
    return (
        <>
            <Container maxWidth = "lg">
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
            </Container>
        </>
    );
}

export default Home;