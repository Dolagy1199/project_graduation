import react, { useEffect, useState } from 'react';
import { authorizedAPIs } from '../API/axiosSetup';
import AllTickets from '../Components/AllTickets'
import { Alert } from '@mui/material';
import CircularIndeterminate from '../Components/CircularIndeterminate';

export default function AllTicket() {
    const [tickets, setTicket] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        authorizedAPIs.get("/ticket/showMany").then((res) => {
            const TicketDataInfo = [...res.data.result];
            TicketDataInfo.forEach((element) => {
                const poster = element.poster;
                element.poster = process.env.REACT_APP_MY_BACKEND_HOST + process.env.REACT_APP_EVENT_POSTER_PATH + poster;
            });
            setTicket(TicketDataInfo);
            setLoading(true);
        }).catch((error) => {
            setError(error.response.data);
            setLoading(true);
        });
    }, [])
    console.log(tickets);
    return (loading === true ?
        error ?
            <Alert severity="error">
                {error}— <strong>check it out!</strong>
            </Alert>
            : <>
                <AllTickets tickets={tickets} />
            </>
        : <CircularIndeterminate />
    );
}


/*
<div className="Ticket">
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



            </Grid>
        </Grid>
    </Box>
</div>*/