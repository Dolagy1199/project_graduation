
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function Buttons() {
    return (

        <Grid container spacing={2}
        >
            <Grid item sx={{
                width: 1100,
                height: 300,
                borderRadius: 5,
                marginTop: 10,
                backgroundColor: '#BB3B62',
                '&:hover': {
                    backgroundColor: '#BB3B62',
                    opacity: [0.9, 0.8, 0.7],
                },
            }} >

                <Container maxWidth="x6">
                    <Typography variant="h3" color="white" marginTop={4}>
                        LAST EVENT
                    </Typography>
                    <Typography variant="h5" color="white">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        From grammar and spelling to style
                        website and tone, Grammarly’s suggestions
                        are comprehensive, helping you
                        communicate effectively
                        and as you intend
                    </Typography>


                </Container>

            </Grid>
        </Grid>

    );
}
