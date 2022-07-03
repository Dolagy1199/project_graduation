import { useEffect, useState } from 'react';
import { authorizedAPIs } from '../API/axiosSetup';
import TicketInfo from '../Components/TicketInfo';
import CircularIndeterminate from '../Components/CircularIndeterminate';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';



export default function OneTicket() {
    const { _id } = useParams();
    const [state, setState] = useState(false);
    const [ticket, setTicket] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const getTicketData = async () => {
            await authorizedAPIs.get(`/ticket/showOne/${_id}`).then((res) => {
                let ticketDataInfo = res.data;
                console.log(ticketDataInfo)
                const { poster } = res.data;
                ticketDataInfo.poster = process.env.REACT_APP_MY_BACKEND_HOST + process.env.REACT_APP_EVENT_POSTER_PATH + poster;
                setTicket(ticketDataInfo);
                setState(true);
                setError(false);

            }).catch((error) => {
                setState(true);
                setError(error.response);
            });
        }
        if (state === false) {
            getTicketData();
        }
    });
    return (state === true ?
        error ?
            <Alert severity="error">
                {error}— <strong>check it out!</strong>
            </Alert> :
            < TicketInfo
                ticket={ticket}
            /> :
        <CircularIndeterminate />
    );
}
