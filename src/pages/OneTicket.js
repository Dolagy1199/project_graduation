import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authorizedAPIs } from '../API/axiosSetup';
import { showAlert } from '../Redux/actions/viewAlert';
import TicketInfo from '../Components/TicketInfo';
import CircularIndeterminate from '../Components/CircularIndeterminate';
import { useDispatch } from 'react-redux';
export default function OneTicket() {
    const { _id } = useParams();
    const [ticket, setTicket] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        authorizedAPIs.get(`/ticket/showOne/${_id}`).then((res) => {
            let ticketDataInfo = res.data;
            console.log(ticketDataInfo)
            const { poster } = res.data;
            ticketDataInfo.poster = process.env.REACT_APP_MY_BACKEND_HOST + process.env.REACT_APP_EVENT_POSTER_PATH + poster;
            setTicket(ticketDataInfo);
        })
            .catch((err) => {
                setTicket({ 'error': err });
                dispatch(showAlert("Error", "error"));
            });
    }, []);
    return (ticket ?
        ticket.error ?
            <>this tiket Not found</> :
            <TicketInfo
                ticket={ticket}
            /> :
        <CircularIndeterminate />
    );
}
