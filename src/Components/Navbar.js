import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import Cookies from "js-cookie";
import { useHistory } from "react-router";



const pages = [{ label: "Home", link: "/" }, { label: "About us", link: "/AboutUs" }, { label: 'Events', link: "/event/true" }];

const theme = createTheme({

    palette: {
        type: 'dark',

        primary: {
            main: '#BB3B62',
        },
        secondary: '',
        error: '',
        warning: '',
        info: '',
        success: '',
    },
    typography: {
        fontWeight: 'bold',
        position: 'right',
        fontSize: 20,
        textAlign: 'right',
    }

});

const Navbar = ({ isUser }) => {
    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" theme={theme}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((element) => (
                                <MenuItem key={element.link} onClick={handleCloseNavMenu}>
                                    <Typography component="a" href={element.link} textAlign="center">{element.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((element) => (
                            <Button
                                key={element.link}
                                component="a"
                                href={element.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {element.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {isUser ?
                            <>
                                <MenuItem key={"Profile"} onClick={handleCloseNavMenu}>
                                    <Typography component="a" href={"/Profile"} textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem key={"logeOut"} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component={Button}
                                        onClick={() => {
                                            Cookies.remove(process.env.REACT_APP_TOKEN_NAME);
                                            history.push('/');
                                            window.location.reload()
                                        }}>Loge out</Typography>
                                </MenuItem>
                            </>
                            :
                            <>
                                <MenuItem key={"logein"} onClick={handleCloseNavMenu}>
                                    <Typography component="a" href={"/logein"} textAlign="center">loge in</Typography>
                                </MenuItem>
                                <MenuItem key={"singup"} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component="a"
                                        href={"/signup"}
                                    >sign up</Typography>
                                </MenuItem>
                            </>
                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;




