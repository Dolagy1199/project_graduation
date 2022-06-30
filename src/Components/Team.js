import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { styled } from '@mui/material/styles';
import './index.css'

import Paper from '@mui/material/Paper';
import { positions } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


class Team extends Component {
    render() {
        return (
            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    ABOUT US
                </Typography>

                <div className="div1">
                </div>

                <Box sx={{
                    padding: 7,
                    marginRight: 10,
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>


                            <Typography fontSize={32} gutterBottom variant="h1" component="div" sx={{ marginTop: "50px" }}>
                                The company is aimed at supplying entertainment houses, venue owners, event organizers and planners,
                                with an easy and feasible solution to sell and market their tickets/invitations. The services provided do not end there; TicketsMarche also provides consultation and
                                fraud protection as well as spectator entry monitoring and surveillance

                            </Typography>

                        </Grid>
                        <Grid item xs={6}>
                            <div className="img1 ourBook">
                            </div>

                        </Grid>

                    </Grid>

                </Box>

                <div className='team'>
                    <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                        OUR TEAM
                    </Typography>

                    <div className="div2">
                    </div>

                    <Box sx={{
                        padding: 7,
                        marginRight: 10,
                        textAlign: 'center',
                        marginLeft: 10,
                    }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <div className="img00">
                                </div>

                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Dolagy Baky Farhid

                                </Typography>
                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Software Developer
                                </Typography>
                            </Grid>
                            <Grid item xs={4}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}>
                                <div className="img00">
                                </div>

                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Dolagy Baky Farhid

                                </Typography>
                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Software Developer
                                </Typography>
                            </Grid>
                            <Grid item xs={4}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}>
                                <div className="img00">
                                </div>

                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Dolagy Baky Farhid

                                </Typography>
                                <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                    Software Developer
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                </div>
            </div>
        );
    }
}
export default Team;



