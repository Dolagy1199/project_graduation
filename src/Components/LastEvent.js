import React, { Component } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Img from '../Assets/h.jpg'
import { Link } from '@mui/material';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


class Buttons extends Component {
    render() {
        return (
           
                <Box sx={{
                    padding: 7,
                   
                }}>
                    <div className="divlastevent" >
                    <Grid container spacing={3}>
                        <Grid  xs={6}>
                                <div className="img7">
                                </div>
                        </Grid>
                        <Grid  xs={6} padding={10}>
                            <Typography fontSize={40} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight={700} textAlign="center">
                                FROM LAST EVENTS
                            </Typography>
                            <Typography fontSize={32} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight={400} textAlign="center">
                                From grammar and
                                spelling to style
                                website and tone,
                                and as you intend
                                From grammar and
                                spelling to style
                                website and tone,
                                and as you intend
                            </Typography>
                        </Grid>
                    </Grid>
                    </div>
                </Box>

        );
    }
}
export default Buttons;














