import {Link} from "react-router-dom";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";

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

const boxes = [
    {title: "Gruppering", gradient: "linear-gradient(45deg, #ffebee 30%, #ff8a80 90%)", link: "/teacher/grouping/"},
]

export function  TeacherPage(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Typography variant={'h2'} className={classes.title}>
                    Lærer seksjon
                </Typography>
                <Grid container className={classes.cardContainer}  justifyContent='center' spacing={3}>
                    <Card className={classes.card} style={{backgroundImage: boxes[0].gradient}}>
                        <CardContent>
                            <Typography variant='h5' component={'h2'}>
                                Gruppering
                            </Typography>
                            <Link to={"/teacher/grouping/"} className={classes.cardButton}>
                                <Button
                                className={classes.cardButton} variant="contained" color={'primary'}>
                                    Se mer
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </div>
    );
}