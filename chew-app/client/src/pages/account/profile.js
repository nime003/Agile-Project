import React, { useState } from 'react';
import { Container, Box, Typography, LinearProgress, List, ListItem, ListItemText, Button, AppBar, Toolbar, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {theme} from "../../App";
import {ThemeProvider} from "@mui/material/styles";


const profilePics =[
    // Pictures from https://www.flaticon.com/packs/animals-123
    "images/avatars/bear.png",
    "images/avatars/chicken.png",
    "images/avatars/hen.png",
    "images/avatars/koala.png",
    "images/avatars/owl.png",
    "images/avatars/panda.png",
    "images/avatars/penguin.png",
    "images/avatars/puffer-fish.png",
    "images/avatars/rabbit.png",
    "images/avatars/sloth.png",
];

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
                            <Avatar alt="Profile Picture" src={process.env.PUBLIC_URL + profilePic} sx={{ width: 56, height: 56, cursor: 'pointer' }} onClick={handleClickOpen} />
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