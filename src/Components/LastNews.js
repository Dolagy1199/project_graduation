import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './index.css'

class LastNews extends Component {
    render() {



        return (
            <Container>
                <div className="LastNews" >
                    <Typography color="#ffff" fontWeight="bold" fontSize={40}>
                        Last News
                    </Typography>
                    <Typography color="#ffff" fontSize={20}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </div>
            </Container>

        );
    }
}
export default LastNews;