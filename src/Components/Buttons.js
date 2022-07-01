import React, { Component } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                                <div className="img8 cinema">
                                </div>
                                <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700}
                                    href="/event/cinema" underline="none" >
                                    Cinema
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 Threater">
                                </div>
                                <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700}
                                    href="/event/threate" underline="none" >
                                    Threater
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 concert">
                                </div>
                                <Link fontSize={32} gutterBottom color={"#BB3B62"} fontWeight={700}
                                    href="/event/concerts" underline="none" >
                                    Concerts
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            <div className="divbutton">
                                <div className="img8 standupcomedy">
                                </div>
                                <Link fontSize={30} gutterBottom color={"#BB3B62"} fontWeight={700}
                                    href="/event/standup-comedy" underline="none" >
                                    standup comedy
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














