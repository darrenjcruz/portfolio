import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./NaviBar.css";

function NaviBar() {
    // State for controlling the opening and closing of the navigation menu
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    // Function to handle opening the navigation menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Function to handle closing the navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#251F47' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Avatar alt="Darren Cruz" src={require("../../assets/logo512.png")} component={Link} to="/" sx={{ display: { xs: 'none', md: 'flex' } }} variant='rounded' />
                    
                    {/* Title */}
                    <Typography className="Title" variant="h5" noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                        Darren Cruz's Portfolio
                    </Typography>

                    {/* Menu icon for mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" >
                            <MenuIcon />
                        </IconButton>
                
                        {/* Navigation menu for mobile */}
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }} >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={Link} to="/AboutMe">About Me</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={Link} to="/Projects">Projects</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component={Link} to="/ContactMe">Contact Me</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Avatar for mobile */}
                    <Avatar alt="Darren Cruz" src={require("../../assets/AnimePhoto.jpg")} component={Link} to="/" sx={{ display: { xs: 'flex', md: 'none' } }}/>

                    {/* Title for mobile */}
                    <Typography className="Title" variant="h5" noWrap component={Link} to="/" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} >
                        Darren Cruz's Portfolio
                    </Typography>

                    {/* Navigation links for desktop */}
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
