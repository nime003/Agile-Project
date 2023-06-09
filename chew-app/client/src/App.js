import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { TeacherPage } from "./pages/teacher/teacher";
import { RecipesPage } from "./pages/recipes/recipes";
import { NavBar } from "./navBar";
import LoginPage from "./pages/account/login";
import ProfilePage from "./pages/account/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
    Typography,
    Button,
    Card,
    CardContent,
    Grid
} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import GroupingPage from "./pages/teacher/groupingPage";
import GamesSelectorPage from './pages/games/gamesSelectorPage';
import FoodCultureGameStartPage from './pages/games/foodCultureGame/FoodCultureGameStartPage';
import FoodCulturegameSection from './pages/games/foodCultureGame/FoodCulturegamePlay';
import { useState, useEffect } from "react";

export const theme = createTheme({
    palette: {
        primary: {
            main: grey[50],
        },
        secondary: {
            main: '#ff5b2e',
        },
    },
});

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
        backgroundImage: `url(${process.env.PUBLIC_URL + "images/pannekake.jpg"})`,
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
    const classes = useStyles(theme);

    const boxes = [
        { title: "Lag deilig mat!", gradient: "linear-gradient(45deg, #f3e5f5 30%, #f6e68a 90%)", link: "/recipes" },
        { title: "Lærer seksjon!", gradient: "linear-gradient(45deg, #ffebee 30%, #ff8a80 90%)", link: "/teacher" },
        { title: "Logg inn!", gradient: "linear-gradient(45deg, #e1bee7 30%, #ba68c8 90%)", link: "/login" },
        { title: "Spill", gradient: "linear-gradient(45deg, #e1bee7 30%, #ba68c8 90%)", link: "/games" },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Typography variant="h3" className={classes.title}>Chew - Et digitalt matlagingskurs for barn!</Typography>
                <Grid container justifyContent="center" spacing={3} className={classes.cardContainer}>
                    {boxes.map((box, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card className={classes.card} style={{ backgroundImage: box.gradient }}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">{box.title}</Typography>
                                    <Link to={box.link} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" className={classes.cardButton}>Se mer</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}



function App() {
   const handleExperiencePoints = (value) => {
    setExperiencePoints(value);
   }
   const [experiencePoints, setExperiencePoints] = useState(0);
   

    return (
        <BrowserRouter>
            <NavBar experiencePointToHandle={experiencePoints} />
            <Routes>
                <Route path={"/"} element={<FrontPage/>} />
                <Route path={"/teacher/"} element={<TeacherPage/>} />
                <Route path={"/teacher/grouping/"} element={<GroupingPage/>} />
                <Route path={"/recipes/"} element={<RecipesPage/>} />
                <Route path={"/login/"} element={<LoginPage/>} />
                <Route path={"/profile"} element={<ProfilePage/>} />
                <Route path={"/games"} element={<GamesSelectorPage/>} />
                <Route path={"/games/foodCultureGame"} element={<FoodCultureGameStartPage/>} />
                <Route path={"/games/foodCultureGamePlay"} element={<FoodCulturegameSection handleExperiencePoints={handleExperiencePoints} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;