import React, { Component } from 'react';
import './index.css'
import Events from './Events'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Img from '../Assets/h.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListDivider from '@mui/joy/ListDivider';
import Input from '@mui/joy/Input';
import TextField from '@mui/joy/TextField';
import IconButton from '@mui/joy/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Ticket from './Ticket';
import Drop from '../Components/dropDown2'
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#BB3B62',
    borderColor: '#BB3B62',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#BB3B62',
        borderColor: '#BB3B62',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#BB3B62',
        borderColor: '#BB3B62',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[700]),
    backgroundColor: pink[700],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));
class AddEvent extends Component {
    render() {


        return (


            <div className='team'>
                <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                    ADD EVENT
                </Typography>

                <div className="div1">
                </div>

                <div className='divinput'>
                    <Box sx={{ display: 'block', flexDirection: 'column', gap: 2 }}>
                        <label className='labelevent'>EVENT NAME </label>
                        <Input
                            size="lg"
                            placeholder="Enter  Event Name"
                            type="password"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <label className='labelevent'>POSTER </label>
                        <Input
                            size="lg"
                            placeholder="Choose File From Your Device "
                            type="file"
                            aria-label='Frist'
                            className='inputt2'

                        />
                        <label className='labelevent'>DEPARTEMPENT </label>
                        <Input
                            size="lg"
                            placeholder="Enter  Departement"
                            type="text"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <label className='labelevent'>PRESENTER</label>
                        <Input
                            size="lg"
                            placeholder="Enter Presenter"
                            type="text"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <label className='labelevent'>FROM</label>
                        <Input
                            size="lg"
                            placeholder="Enter Start Date"
                            type="date"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <label className='labelevent'>TO</label>
                        <Input
                            size="lg"
                            placeholder="Enter End Date"
                            type="date"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <label className='labelevent2'> Hall Name </label>
                        <Drop className='drop' />

                        <Typography className='labelevent' sx={{marginTop:"20px"}}> Available seat  </Typography>
                        <Input
                            size="lg"
                            placeholder="Number of seat class a"
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <Input
                            size="lg"
                            placeholder="Number of seat class B"
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <Input
                            size="lg"
                            placeholder="Number of seat class C"
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <Typography className='labelevent'> Cost  </Typography>
                        <Input
                            size="lg"
                            placeholder="Cost class a"
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <Input
                            size="lg"
                            placeholder="Cost class B"
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />
                        <Input
                            size="lg"
                            placeholder="Cost class a C "
                            type="number"
                            aria-label='Frist'
                            className='inputt'

                        />

                        <div >
                            <ColorButton variant="contained" className="addevent3" >Submit</ColorButton>
                        </div>


                    </Box>

                </div>
            </div>

        );
    }
}
export default AddEvent;























