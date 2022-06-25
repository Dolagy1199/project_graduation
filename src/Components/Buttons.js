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
            <div className='slider' >
                <Box sx={{
                    padding: 7,
                    marginRight: 20,
                    marginLeft: -7,
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 img1">
                                </div>
                                <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700} 
                                    href="#"   underline="none" >
                                    PARTY
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 img1">
                                </div>
                                <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700} 
                                    href="#"   underline="none" >
                                    PARTY
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 img1">
                                </div>
                               <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700} 
                                    href="#"   underline="none" >
                                    PARTY
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 img1">
                                </div>
                               <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700} 
                                    href="#"   underline="none" >
                                    PARTY
                                </Link>
                                     </div>

                        </Grid>
                    </Grid>
                </Box>
            </div >

            
        );
    }
}
export default Buttons;














