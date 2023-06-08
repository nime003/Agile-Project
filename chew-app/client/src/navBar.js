import React, {useState} from "react";
import {AppBar, Box, Drawer, IconButton, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {theme} from "./App";

export function NavBar(){
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const list = () => (
        <Box
            sx={{ width: 240}}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
        >
            <Link to={"/"}>
                <ListItemButton>
                    <ListItemText primary="Hjem"/>
                </ListItemButton>
            </Link>
            <Link to="/teacher">
                <ListItemButton>
                    <ListItemText primary="Lærer område"/>
                </ListItemButton>
            </Link>
            <Link to="/recipes">
                <ListItemButton>
                    <ListItemText primary="Oppskrifter"/>
                </ListItemButton>
            </Link>
            <Link to="/login">
                <ListItemButton>
                    <ListItemText primary="Login"/>
                </ListItemButton>
            </Link>
        </Box>
    );

    return(
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none'}}>
                            <img src={process.env.PUBLIC_URL + '/images/home-icon.svg'} alt={"Home Icon"}
                                style={{height:'40px', width: 'auto', paddingRight: '10px', opacity: '0.9'}}
                            />
                            <img src={process.env.PUBLIC_URL + "images/ChewLogo.png"} alt="Logo"
                                 style={{height:'50px', width: 'auto'}}
                            />
                        </Link>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerOpen}
                            sx={{mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    {list()}
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

export default NavBar;