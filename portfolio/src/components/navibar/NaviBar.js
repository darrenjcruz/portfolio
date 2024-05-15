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
            <Container className="Header" maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="Darren Cruz" src={require("../../assets/logo512.png")} component={Link} to="/" sx={{display: {xs: 'none', md: 'flex'}}} variant='rounded' />
                    
                    <Typography className="Title" variant="h5" noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                        Darren Cruz's Portfolio
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" >
                            <MenuIcon />
                        </IconButton>
                
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }} >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography cltextAlign="center" component={Link} to="/AboutMe">About Me</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={Link} to="/Projects">Projects</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={Link} to="/ContactMe">Contact Me</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Avatar alt="Darren Cruz" src={require("../../assets/AnimePhoto.jpg")} component={Link} to="/" sx={{display: {xs: 'flex', md: 'none'}}}/>

                    <Typography className="Title" variant="h5" noWrap component={Link} to="/" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} >
                        Darren Cruz's Portfolio
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button className="LinkButton" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 1, color: 'white', display: 'block' }} component={Link} to="/AboutMe">
                            About Me
                        </Button>

                        <Button className="LinkButton" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 1, color: 'white', display: 'block' }} component={Link} to="/Projects">
                            Projects
                        </Button>

                        <Button className="LinkButton" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 1, color: 'white', display: 'block' }} component={Link} to="/ContactMe">
                            Contact Me
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NaviBar;
