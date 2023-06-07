import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { TeacherPage } from "./pages/teacher/teacher";
import { RecipesPage } from "./pages/recipes/recipes";
import LoginPage from "./pages/account/login";
import ProfilePage from "./pages/account/profile";
import MenuIcon from '@mui/icons-material/Menu';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
    Typography,
    Button, Card, CardContent, Grid
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import bgImage from "./background.JPG";
import Logo from './ChewLogo.png';


const useStyles = styled((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 30px',
    },
    background: {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '120%',
        height: '120%',
        filter: 'blur(5px)',
        zIndex: -1,
    },
    title: {
        marginBottom: '30px',
        fontWeight: 'bold',
        color: '#fff',
        textShadow: '2px 2px 4px #000',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        marginBottom: '30px',
    },
    card: {
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
        },
    },
    cardButton: {
        marginTop: '10px',
    },
}));

function FrontPage() {
    const classes = useStyles();
    const navigate = useNavigate();

    const boxes = [
        { title: "Lag ferske og nydelige frokoster!", gradient: "linear-gradient(45deg, #f3e5f5 30%, #f6e68a 90%)" },
        { title: "Lag enkle og avanserte middager for alle aldre!", gradient: "linear-gradient(45deg, #ffebee 30%, #ff8a80 90%)" },
        { title: "Lag både søte og friske desserter", gradient: "linear-gradient(45deg, #e1bee7 30%, #ba68c8 90%)" },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.background}></div>
            <Typography variant="h3" className={classes.title}>Chew - Et digitalt matlagingskurs for barn!</Typography>
            <Grid container justifyContent="center" spacing={3} className={classes.cardContainer}>
                {boxes.map((box, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card} style={{ backgroundImage: box.gradient }}>
                            <CardContent>
                                <Typography variant="h5" component="h2">{box.title}</Typography>
                                <Button variant="contained" color="primary" className={classes.button} onClick={() => navigate("/recipes")}>
                                    Se mer
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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
                                <div style={{
                                    borderRadius: '5px',
                                    backgroundColor: 'white',
                                    display: 'inline-block',
                                    padding: '5px'
                                }}>
                                    <img src={Logo} alt="Logo" height="40px"
                                         style={{
                                             filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))'}}
                                    />
                                </div>
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