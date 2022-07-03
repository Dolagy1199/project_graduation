import React, { useEffect, useState } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeCountDown from './TimeCountDown';


export default function AllTickets() {

    return (
        <div className='team'>
            <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                ALL TICKET
            </Typography>
            <div className="div1">
                <div className="AllTicket">
                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <Grid container spacing={1} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "3%",
                        }}>
                            <Grid item >
                                <div className='img5' style={{ backgroundImage: `url(https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=ar&gl=US)` }}></div>
                            </Grid>

                            <Grid item xs={6}>

                                <Typography fontSize={23} fontWeight="bold">Andrew Work At Google</Typography>
                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#bb3b62",
                                    marginTop: "20px",
                                    alignItems: "baseline",
                                }}  >
                                    Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                        Location
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
                                        Google
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
                                        {new Date().toLocaleString()}
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
                                        {new Date().toLocaleString()}
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
                                        50A
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
                                        100$
                                    </Typography>
                                </Typography>

                                <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    color: "#bb3b62",
                                    alignItems: "baseline",
                                }}  >
                                    Ticket number:

                                    <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ color: "black" }}  >
                                        0909200020111999
                                    </Typography>
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>


    );
}
