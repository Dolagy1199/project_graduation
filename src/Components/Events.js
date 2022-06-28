import React, { Component } from 'react';

import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddEvent from './AddEvent'
import Img from '../Assets/h.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
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
class Events extends Component {
    render() {


        return (


            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    CINEMA
                </Typography>

                <div className="div1">
                </div>


                <div className="addeventbutton">
                    <ColorButton variant="contained" className="addevent" component={Link} to='/AddEvent'>ADD EVENT</ColorButton>
                </div>
                <Box sx={{
                    padding: 7,
                    marginRight: 10,
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>

                        </Grid>
                    </Grid>

                </Box>

            </div>
        );
    }
}
export default Events;