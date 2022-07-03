import React, { Component } from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


class Services extends Component {
    render() {
        return (
            <div className='slider' >
                <Box sx={{
                    padding: 4,
                    marginRight: 20,
                    marginLeft: -20,

                }}>
                    <div className="allicon">
                        <Grid container spacing={3} marginLeft={10} paddingTop={10}>
                            <Grid item xs={3}>

                                <HelpIcon className="newicon" />
                                <Typography fontSize={30} gutterBottom fontWeight={700} marginRight={10} paddingTop={2} className="servicesfont">
                                    Do you want to help?                                </Typography>
                                <Typography fontSize={20} gutterBottom fontWeight={400} marginRight={10} className="servicesfont">
                                    In case of a problem, you can contact us on social media Facebook, WhatsApp, instagram and Twitter                                </Typography>
                            </Grid>
                            <Grid item xs={3}>

                                <VisibilityIcon className="newicon" />
                                <Typography fontSize={30} gutterBottom fontWeight={700} marginRight={10} paddingTop={2} className="servicesfont">
                                    Do you want to know all the events?                              </Typography>
                                <Typography fontSize={20} gutterBottom fontWeight={400} marginRight={10} className="servicesfont">
                                    You can see all our events in detail of their kind and how to book, and you can also become a partner with us
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>

                                <KeyboardReturnIcon className="newicon" />
                                <Typography fontSize={30} gutterBottom fontWeight={700} marginRight={10} paddingTop={2} className="servicesfont">
                                    Do you want to inquire about tickets and payment?                             </Typography>
                                <Typography fontSize={20} gutterBottom fontWeight={400} marginRight={10} className="servicesfont">
                                    When a party is canceled, the full value of the ticket will be refunded in case of payment                   </Typography>
                            </Grid>


                            <Grid item xs={3}>
                                <CancelIcon className="newicon" />
                                <Typography fontSize={30} gutterBottom fontWeight={700} marginRight={10} paddingTop={2} className="servicesfont">
                                    It happened and the party was canceled ?                         </Typography>
                                <Typography fontSize={20} gutterBottom fontWeight={400} marginRight={10} className="servicesfont">
                                    The fourth service, if you don't pay within twenty-four hours, the ticket will be canceled                       </Typography>
                            </Grid>
                        </Grid>

                    </div>
                </Box>
            </div >


        );
    }
}
export default Services;














