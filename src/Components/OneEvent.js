import React, { useEffect, useState } from 'react';

import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { useHistory, useParams } from 'react-router-dom';
import { authorizedAPIs } from '../API/axiosSetup';
import CircularIndeterminate from './CircularIndeterminate';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from 'react-redux';
import { showAlert } from '../Redux/actions/viewAlert';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[700]),
    backgroundColor: pink[700],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));
export default function OneEvent() {
    const dispatch = useDispatch();
    const { _id } = useParams();
    const [event, setEvent] = useState();
    const history = useHistory();
    useEffect(() => {
        authorizedAPIs.get(`/event/showOne/${_id}`).then((res) => {
            let eventDataInfo = res.data;
            const { poster } = res.data;
            eventDataInfo.poster = process.env.REACT_APP_MY_BACKEND_HOST + process.env.REACT_APP_EVENT_POSTER_PATH + poster;
            setEvent(eventDataInfo);
        })
            .catch((err) => {
                setEvent({ "error": err });
                dispatch(showAlert(err.message, "error"));
            });

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const chairClass = data.get('chairClass');
        const eventId = _id;
        const submissionInfo = { chairClass, eventId };
        await authorizedAPIs
            .post("/ticket/new", submissionInfo)
            .then((res) => {
                const { _id } = res.data.model;
                history.push(`/ticket/${_id}`);
                window.location.reload()
            })
            .catch((error) => {
                dispatch(showAlert(error.message, "error"));
            });
    };


    return (event ?
        <div className="divbooking">
            <Box sx={{
                padding: 7,
                textAlign: 'center',
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}  >
                <div className="img88" style={{ backgroundImage: `url(${event.poster})` }}>
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}  >
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                {event.eventTitle}
                            </Typography>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}   >
                            Presenter : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }}>
                                {event.presenter}
                            </Typography>
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}   >
                            location :  <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                {event.hallName}
                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                -{event.address}
                            </Typography>
                        </Typography>
                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}   >
                            from : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                {new Date(event.startTime).toLocaleString()}
                            </Typography>
                        </Typography>

                        <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}   >
                            To : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }}>
                                {new Date(event.endTime).toLocaleString()}
                            </Typography>
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid item xs={2} sm={2} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "auto",
                            }} >
                                <FormControl
                                    fullWidth
                                    size="medium"
                                    key="chairClass"
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Seats
                                    </InputLabel>
                                    <Select
                                        type="text"
                                        id="chairClass"
                                        label="seats"
                                        name="chairClass"
                                    >
                                        <MenuItem key="A0" value="A">classA : {event.Cost[0]}</MenuItem>
                                        <MenuItem key="B1" value="B">classB : {event.Cost[1]}</MenuItem>
                                        <MenuItem key="C2" value="C">classC : {event.Cost[2]}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <div className="addeventbutton">
                                <ColorButton variant="contained" className="BOOKNOW" type="submit" >BOOK NOW </ColorButton>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Box >

        </div >
        : <CircularIndeterminate />
    );
}