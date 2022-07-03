import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { uploadImageAPIS, authorizedAPIs } from "../API/axiosSetup";
import Cookies from "js-cookie";
import Alert from '@mui/material/Alert';

const theme = createTheme();


export default function Signup() {
    const [error, setError] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password')
        let submissionInfo = {
            email,
            password
        }
        await uploadImageAPIS
            .post(
                "/User/new", data
            )
            .then(async (res) => {
                await authorizedAPIs
                    .post(
                        "/authintication/loginUser", submissionInfo
                    )
                    .then((res) => {
                        Cookies.set(process.env.REACT_APP_TOKEN_NAME, res.data.token);
                        document.location.reload()
                    })
                    .catch((error) => {
                    });
            })
            .catch((error) => {
                console.log(error);
                setError(error.response.data);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="avatarImage"
                                    label="avatar"
                                    type="file"
                                    id="avatarImage"
                                    autoComplete="avatar"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    size="medium"
                                    key="Gender"
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        type="text"
                                        id="gender"
                                        label="Gender"
                                        name="gender"
                                    >
                                        <MenuItem key="Male" value="Male">
                                            Male
                                        </MenuItem>
                                        <MenuItem key="Female" value="Female">
                                            Female
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="nationalId"
                                    label="nationalId"
                                    type="text"
                                    id="nationalId"
                                    autoComplete="nationalId"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="age"
                                    label="age"
                                    type="number"
                                    id="age"
                                    autoComplete="age"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: pink[500] }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/logein" variant="body2">
                                    Already have an account? log in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            {error === false ? <></> :
                <Alert severity="error">
                    {error}— <strong>check it out!</strong>
                </Alert>}
        </ThemeProvider >
    );
}