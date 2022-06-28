import React, { Component } from 'react';

import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddEvent from './AddEvent'
import Img from '../Assets/h.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import AddEevent from './AddEvent'
class Events extends Component {
    render() {


        return (

            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    TICKET
                </Typography>
                <div className="div1">
                </div>

            </div>
        );
    }
}
export default Events;