import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PersonIcon from '@mui/icons-material/Person';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import '../Components/index.css'
import Paper from '@mui/material/Paper';
import CircularIndeterminate from '../Components/CircularIndeterminate';
import { authorizedAPIs } from '../API/axiosSetup';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Profile() {
    const [userInfo, setUserInfo] = useState();
    const [userAvatar, setUserAvatar] = useState()
    useEffect(() => {
        const getUserData = async () => {
            await authorizedAPIs.get("/user/profile")
                .then((res) => {
                    console.log(res.data.result);
                    setUserInfo(res.data.result);
                })
                .catch((error) => {
                    setUserInfo({ "error": error });
                });
        }
        if (userInfo && userInfo.avatar) {
            setUserAvatar(process.env.REACT_APP_MY_BACKEND_HOST + process.env.REACT_APP_USER_AVATAR_PATH + userInfo.avatar);
        }
        if (!userInfo)
            getUserData()
    }, [userInfo, userAvatar]);
    return (userInfo ?
        userInfo.error ?
            <>Not Found</> :
            < div className='divprofile' >

                <Box sx={{
                    padding: 7,
                    marginRight: 30,
                    textAlign: 'center',
                    marginLeft: 30,
                }}></Box>

                <Grid container spacing={1} sx={{ height: 'auto%' }}>
                    <Grid item xs={12} >
                        <div className="img3" style={{ backgroundImage: `url(${userAvatar})` }}>
                        </div>
                        <div className='info'>
                            <Typography fontSize={32} gutterBottom variant="h1" component="div" fontWeight={700} className='name'>
                                {userInfo.firstName}{" "}{userInfo.lastName}

                            </Typography>
                        </div>
                        <div className="team_details">
                            <Typography fontSize={24} fontWeight={400} className="Typography">
                                <PersonIcon className='icon1' /> {userInfo.age} Years

                            </Typography>
                            <Typography fontSize={24} fontWeight={400} className="Typography">
                                <LocalPostOfficeIcon className='icon1' />{userInfo.email}

                            </Typography>

                            <Typography fontSize={24} fontWeight={400} className="Typography">
                                <CallIcon className='icon1' />   {userInfo.phoneNumber}

                            </Typography>
                            <Typography fontSize={24} fontWeight={400} className="Typography">
                                <AccountCircleIcon className='icon1' /> {userInfo.gender}

                            </Typography>
                            <Typography fontSize={24} fontWeight={400} className="Typography">
                                <FeaturedVideoIcon className='icon1' />   {userInfo.nationalId}

                            </Typography>
                            {
                                (userInfo.isaPartner ?
                                    <Typography fontSize={24} fontWeight={400} className="Typography">
                                        <HandshakeIcon className='icon1' /> Partner
                                    </Typography>
                                    : <Typography fontSize={24} fontWeight={400} className="Typography">
                                        <HandshakeIcon className='icon1' /> Client
                                    </Typography>
                                )
                            }

                            <Typography fontSize={24} fontWeight={400} className="Typography" component={Button} href="/show-all-ticket">
                                <BookOnlineIcon className='icon1' />   Tickets

                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div >
        : <CircularIndeterminate />
    );
}
