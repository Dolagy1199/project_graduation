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
import DropdownList from '../Components/dropDown'
import AddEevent from './AddEvent'


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

            <div className="divbooking">

                <Box sx={{
                    padding: 7,
                    textAlign: 'center',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div className="img88">
                    </div>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}  >
                                Event Discreption :  <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                    Show Events
                                </Typography>
                            </Typography>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}   >
                                Departement : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }}>
                                    Show Events
                                </Typography>
                            </Typography>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}   >
                                Presenter : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }}>
                                    Show Events
                                </Typography>
                            </Typography>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}   >
                                Start Date : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                    Show Events
                                </Typography>
                            </Typography>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}   >
                                End Date : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }}>
                                    Show Events
                                </Typography>
                            </Typography>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "baseline",
                            }}  >
                                Available seat :
                                <DropdownList />
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
                <div className="addeventbutton">
                    <ColorButton variant="contained" className="BOOKNOW" href="/Ticket" >BOOK NOW </ColorButton>
                </div>

            </div>




        );
    }
}
export default Events;