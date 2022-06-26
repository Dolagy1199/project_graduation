import * as React from 'react';
import { styled } from '@mui/material/styles';
import Team from '../Components/Team';
import Paper from '@mui/material/Paper';
import Events from '../Components/Events'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function AboutUs() {
    return (
        <div>
            <Events />


        </div>
    );
}