import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./NaviBar.css";

function NaviBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="Darren Cruz" src={require("../../assets/AnimePhoto.jpg")} sx={{display: {xs: 'none', md: 'flex'}}} />
                    
                    <Link to='/'>
                        <Typography className="Title" variant="h6" noWrap component="a" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                            Darren Cruz's Portfolio
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" >
                            <MenuIcon />
                        </IconButton>
                
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }} >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link to={'/AboutMe'}>About Me</Link></Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link to={'/Projects'}>Projects</Link></Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link to={'/ContactMe'}>Contact Me</Link></Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Avatar alt="Darren Cruz" src={require("../../assets/AnimePhoto.jpg")} sx={{display: {xs: 'flex', md: 'none'}}}/>

                    <Link to='/'>
                        <Typography className="Title" variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} >
                            Darren Cruz's Portfolio
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                            <Link to={'/AboutMe'}>About Me</Link>
                        </Button>

                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                            <Link to={'/Projects'}>Projects</Link>
                        </Button>

                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                            <Link to={'/ContactMe'}>Contact Me</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NaviBar;