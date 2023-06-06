import React, { useState } from 'react';
import { Container, Box, Typography, LinearProgress, List, ListItem, ListItemText, Button, AppBar, Toolbar, Avatar, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import profilePic1 from './images/1.jpg';
import profilePic2 from './images/2.jpg';
import profilePic3 from './images/3.jpg';
import profilePic4 from './images/4.jpg';
import profilePic5 from './images/5.jpg';
import profilePic6 from './images/6.jpg';
import profilePic7 from './images/7.jpg';
import profilePic8 from './images/8.jpg';
import profilePic9 from './images/9.jpg';
import profilePic10 from './images/10.jpg';
import profilePic11 from './images/11.jpg';
import profilePic12 from './images/12.jpg';
import profilePic13 from './images/13.jpg';
import profilePic14 from './images/14.jpg';
import {theme} from "../../App";
import {ThemeProvider} from "@mui/material/styles";

const profilePics = [profilePic1, profilePic2, profilePic3, profilePic4, profilePic5, profilePic6, profilePic7, profilePic8, profilePic9, profilePic10, profilePic11, profilePic12, profilePic13, profilePic14];

const ProfilePage = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(profilePics[0]); //setter default bilde på siden

    const handleLogout = () => {
        navigate('/');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectPicture = (index) => {
        setProfilePic(profilePics[index]);
        handleClose();
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6">Profile Page</Typography>
                        <Button color="inherit" onClick={handleLogout}>Log Out</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="md">
                    <Box sx={{ my: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 56, height: 56, cursor: 'pointer' }} onClick={handleClickOpen} />
                            <Typography variant="h4" component="h1" gutterBottom sx={{ ml: 2 }}>
                                Admin
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            Teacher
                        </Typography>
                        <LinearProgress variant="determinate" value={75} />
                        <Typography variant="subtitle1" gutterBottom>
                            Level 2
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Favorittmåltid" secondary="Pannekaker" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Lært denne uken" secondary="Hvordan lage pannekaker" />
                            </ListItem>
                        </List>
                    </Box>
                </Container>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Select Profile Picture</DialogTitle>
                    <DialogContent>
                        {profilePics.map((pic, index) => (
                            <img
                                key={index}
                                src={pic}
                                alt={`Profile pic ${index+1}`}
                                onClick={() => handleSelectPicture(index)}
                                style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                            />
                        ))}
                    </DialogContent>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
}

export default ProfilePage;