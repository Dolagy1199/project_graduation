import * as React from 'react';
import { styled } from '@mui/material/styles';
import Team from './Profile';
import Paper from '@mui/material/Paper';
import Events from '../Components/Events'
import AddEvent from '../Components/AddEvent'

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
