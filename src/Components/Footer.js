import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './index.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

class Footer extends Component {
    render() {




        return (


            <div className="footer" >
                <Typography color="#ffff" fontWeight="bold" fontSize={40} textAlign="center">
                    footer
                </Typography>

                <Box sx={{
                    padding: 7,
                    marginRight: 10,
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" color={"#ffffff"}  >
                                Get to Know Us

                            </Typography>
                            <Link fontSize={20} gutterBottom color={"#ffffff"} fontWeight={400}
                                href="#" underline="none" >
                                About Us
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" color={"#ffffff"}  >
                                Show Events
                            </Typography>
                            <Link fontSize={20} gutterBottom color={"#ffffff"} fontWeight={400}
                                href="#" underline="none" >
                                About Us
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" color={"#ffffff"}  >
                                Shop with Us
                            </Typography>
                            <Link fontSize={20} gutterBottom color={"#ffffff"} fontWeight={400}
                                href="#" underline="none" >
                                About Us
                            </Link>

                        </Grid>
                    </Grid>

                </Box>

                <Typography fontSize={15} gutterBottom variant="h1" component="div" className='copy' color={"#ffffff"} >
                    Conditions of Use & SalePrivacy NoticeInterest-Based Ads©1996–2022, booking.com, Inc. or its affiliates

                </Typography>

            </div>




        );
    }
}
export default Footer;