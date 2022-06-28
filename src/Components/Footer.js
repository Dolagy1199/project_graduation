import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './index.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

class Footer extends Component {
    render() {




        return (


            <div className="footer" >

                <Box sx={{
                    padding: 7,
                    marginRight: 10,
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                             

                            }}  >
                            
                                Address  : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                    Sohag -Elbalyana
                                </Typography>
                            </Typography>


                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",

                            }}  >
                                Phone : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                    01282677208
                                </Typography>
                            </Typography>


                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                alignItems:"left"

                            }}  >
                                Emaile  : <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" sx={{ marginLeft: "6px" }} >
                                    dolagydolagy1199@gmail.com
                                </Typography>
                            </Typography>



                        </Grid>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" color={"#ffffff"}  >
                                Show Events
                            </Typography>
                            <Link fontSize={20} gutterBottom color={"#ffffff"} fontWeight={400}
                                href="#" underline="none" >
                                Event
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography fontSize={20} gutterBottom variant="h1" component="div" fontWeight="bold" color={"#ffffff"}  >
                                Contact Us
                            </Typography>
                            <Link fontSize={20} gutterBottom color={"#ffffff"} fontWeight={400}
                                href="#" underline="none" >
                                    <div className='icon'>
                                <FacebookIcon />
                                <WhatsAppIcon />
                                < InstagramIcon />
                                <TwitterIcon/>
                                </div>
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