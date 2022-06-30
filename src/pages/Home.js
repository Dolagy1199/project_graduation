import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from '../Components/Slider'
import Buttons from '../Components/Buttons';
import LastNews from '../Components/LastNews';
import LastEvent from '../Components/LastEvent';
import Footer from '../Components/Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Home() {
  return (
    <div>
      <Slider />
      <Buttons />
      <LastNews />
      <LastEvent />
    </div>
  );
}
