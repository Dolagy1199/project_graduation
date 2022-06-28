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
import AddEevent from './AddEvent'
class Events extends Component {
    render() {


        return (

            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    TICKET
                </Typography>
                <div className="div1">
                </div>


                <div className="Ticket">


                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <Grid container spacing={1} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "30px",
                        }}>
                            <Grid item >
                                <div className='img5'></div>
                            </Grid>

                            <Grid item xs={6}>

                                <Typography fontSize={23} fontWeight="bold">DOLAGY BAKY FARHID</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        Dolagy Baky Farhid
                                    </Typography>
                                </Typography>



                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    Presenter :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        Dolagy Baky Farhid
                                    </Typography>
                                </Typography>


                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    From  :
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        10:30 PM 09 sep 2022
                                    </Typography>
                                </Typography>



                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    To:
                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        10:30 PM 09 sep 2022
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    Seat Number  :

                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        50
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    Cost :

                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        100
                                    </Typography>
                                </Typography>



                            </Grid>
                        </Grid>
                    </Box>



                </div>


            </div>



        );
    }
}
export default Events;

