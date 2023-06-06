import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { TeacherPage } from "./pages/teacher/teacher";
import { RecipesPage } from "./pages/recipes/recipes";
import DisplayRecipe from "./pages/recipes/displayRecipe";
import LoginPage from "./pages/account/login";
import ProfilePage from "./pages/account/profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Dropdown} from "react-bootstrap";
import {
    AppBar,
    Box,
    Drawer,
    FormControlLabel,
    FormGroup,
    IconButton, ListItem, ListItemButton, ListItemText, Menu,
    MenuItem,
    Switch,
    Toolbar,
    Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {AccountCircle} from "@mui/icons-material";
import {grey} from "@mui/material/colors";


function FrontPage() {
    return (
        <div>
            <h1>HELLO FRONT PAGE</h1>
        </div>
    );
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff5b2e',
        },
        secondary: {
            main: grey[500],
        },
    },
});

function NavBar(){

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
                    <ListItemText primary="Home"/>
                </ListItemButton>
            </Link>
            <Link to="/teacher">
                <ListItemButton>
                    <ListItemText primary="Teacher"/>
                </ListItemButton>
            </Link>
            <Link to="/recipes">
                <ListItemButton>
                    <ListItemText primary="Recipes"/>
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
                            <Typography variant="h6" noWrap component="div">
                                Chew App
                            </Typography>
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

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path={"/"} element={<FrontPage/>} />
              <Route path={"/teacher/"} element={<TeacherPage/>} />
              <Route path={"/recipes/"} element={<RecipesPage/>} />
              <Route path={"/login/"} element={<LoginPage/>} />
              <Route path={"/profile"} element={<ProfilePage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
