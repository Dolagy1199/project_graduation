import React, { useEffect, useState } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeCountDown from './TimeCountDown';


export default function TicketInf({ ticket }) {
    const currentTime = new Date().valueOf();
    const RemenderTime = (new Date(ticket.expairAt).valueOf() - currentTime) / 1000;
    const { initialHour, initialMinute, initialSeconds } = {
        initialHour: Math.max(0, parseInt(RemenderTime / (60 * 60))),
        initialMinute: Math.max(0, parseInt((RemenderTime % (60 * 60)) / 60)),
        initialSeconds: Math.max(0, parseInt(RemenderTime % 60)),
    };
    const [hour, sethour] = useState(initialHour);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    return (
        <div className='team'>
            <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                 ALL TICKET
            </Typography>
            <div className="div1">
            </div>
            {
                ticket.paid === false ?
                    <Typography fontSize={45} gutterBottom variant="h3" component="div" color="#ABBACD" textAlign="center">
                        <TimeCountDown
                            hour={hour}
                            sethour={sethour}
                            minutes={minutes}
                            setMinutes={setMinutes}
                            seconds={seconds}
                            setSeconds={setSeconds}
                        />
                    </Typography>
                    : <></>
            }
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
                            <div className='img5' style={{ backgroundImage: `url(${ticket.poster})` }}></div>
                        </Grid>

                        <Grid item xs={6}>

                            <Typography fontSize={23} fontWeight="bold">{ticket.eventTitle}</Typography>
                            <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "#bb3b62",
                                marginTop: "20px",
                                alignItems: "baseline",
                            }}  >
                                Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                    {ticket.hallName} - {ticket.address}
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
                                    {ticket.presenter}
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
                                    {new Date(ticket.startTime).toLocaleString()}
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
                                    {new Date(ticket.endTime).toLocaleString()}
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
                                    {ticket.chairNumber}
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
                                    {ticket.Cost}
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
                                    {ticket._id}
                                </Typography>
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </div>






















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
                            <div className='img5' style={{ backgroundImage: `url(${ticket.poster})` }}></div>
                        </Grid>

                        <Grid item xs={6}>

                            <Typography fontSize={23} fontWeight="bold">{ticket.eventTitle}</Typography>
                            <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "#bb3b62",
                                marginTop: "20px",
                                alignItems: "baseline",
                            }}  >
                                Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                    {ticket.hallName} - {ticket.address}
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
                                    {ticket.presenter}
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
                                    {new Date(ticket.startTime).toLocaleString()}
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
                                    {new Date(ticket.endTime).toLocaleString()}
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
                                    {ticket.chairNumber}
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
                                    {ticket.Cost}
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
                                    {ticket._id}
                                </Typography>
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </div>





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
                            <div className='img5' style={{ backgroundImage: `url(${ticket.poster})` }}></div>
                        </Grid>

                        <Grid item xs={6}>

                            <Typography fontSize={23} fontWeight="bold">{ticket.eventTitle}</Typography>
                            <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "#bb3b62",
                                marginTop: "20px",
                                alignItems: "baseline",
                            }}  >
                                Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                    {ticket.hallName} - {ticket.address}
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
                                    {ticket.presenter}
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
                                    {new Date(ticket.startTime).toLocaleString()}
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
                                    {new Date(ticket.endTime).toLocaleString()}
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
                                    {ticket.chairNumber}
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
                                    {ticket.Cost}
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
                                    {ticket._id}
                                </Typography>
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </div>


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
                            <div className='img5' style={{ backgroundImage: `url(${ticket.poster})` }}></div>
                        </Grid>

                        <Grid item xs={6}>

                            <Typography fontSize={23} fontWeight="bold">{ticket.eventTitle}</Typography>
                            <Typography fontSize={23} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "#bb3b62",
                                marginTop: "20px",
                                alignItems: "baseline",
                            }}  >
                                Location :   <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px", color: "black" }}  >
                                    {ticket.hallName} - {ticket.address}
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
                                    {ticket.presenter}
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
                                    {new Date(ticket.startTime).toLocaleString()}
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
                                    {new Date(ticket.endTime).toLocaleString()}
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
                                    {ticket.chairNumber}
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
                                    {ticket.Cost}
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
                                    {ticket._id}
                                </Typography>
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>

        
    );
}
