import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Img from '../Assets/h.jpg'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { styled } from '@mui/material/styles';
import './index.css'

import Paper from '@mui/material/Paper';
import { positions } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


class Team extends Component {
    render() {
        return (
            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    ABOUT US
                </Typography>

                <div className="div1">
                </div>

                <Box sx={{
                    padding: 7,
                    marginRight: 10,
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="img1">
                            </div>

                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Name :Dolagy Baky Farhid

                            </Typography>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" >
                                Software Developer
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>

            </div>
        );
    }
}
export default Team;



