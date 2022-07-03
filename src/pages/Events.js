import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Events from '../Components/Events'
import { authorizedAPIs } from '../API/axiosSetup';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function Event() {
    const [partner, setPartner] = useState(false);
    React.useEffect(() => {
        authorizedAPIs.get('/user/isPartner').then((res) => {
            setPartner(res.data);
        }).catch((error) => {

        })
    }, []);
    console.log(partner);
    return (
        <div>
            <Events partner={partner} />
        </div>
    );
}
