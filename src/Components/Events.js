import React, { Component } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { Link } from '@mui/material';
import { useParams } from 'react-router-dom';
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#BB3B62',
    borderColor: '#BB3B62',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#BB3B62',
        borderColor: '#BB3B62',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#BB3B62',
        borderColor: '#BB3B62',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[700]),
    backgroundColor: pink[700],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));
export default function Events() {
    const { department } = useParams();
    return (
        <div className='team'>
            <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                {department}
            </Typography>

            <div className="div1">
            </div>


            <div className="addeventbutton555">
                <ColorButton variant="contained" className="addevent" href='/AddEvent'>ADD EVENT</ColorButton>
            </div>
            <Box sx={{
                padding: 7,
                marginRight: 10,
                textAlign: 'center',
                marginLeft: 10,
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>

                        <Typography component={Link} color="black" underline="none" href="/Booking">
                            <div className='img1'></div>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            Name :Dolagy Baky Farhid

                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            From : 12/12/2022 07:12 AM
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            To :   12/12/2022 09:30 AM
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                        <Typography component={Link} color="black" underline="none" href="/Booking">
                            <div className='img1'></div>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            Name :Dolagy Baky Farhid

                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            From : 12/12/2022 07:12 AM
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            To :   12/12/2022 09:30 AM
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                        <Typography component={Link} color="black" underline="none" href="/Booking">
                            <div className='img1'></div>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            Name :Dolagy Baky Farhid

                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            From : 12/12/2022 07:12 AM
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            To :   12/12/2022 09:30 AM
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>

                        <Typography component={Link} color="black" underline="none" href="/Booking">
                            <div className='img1'></div>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            Name :Dolagy Baky Farhid

                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            From : 12/12/2022 07:12 AM
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                            To :   12/12/2022 09:30 AM
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}
