import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import DSC_Home_Icon from "./DSC_Home_Icon";
import DSC_Horizontal_Icon from "./DSC_Horizontal_Icon";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    buttonText: {
        color: 'black',
        fontWeight: "bold",
        fontFamily: "Century Gothic",
        textTransform: "none",
        fontSize: 18
    },
    appBar: {
        backgroundColor: "#bfffa8",
    }
}));

const Header = (props) => {
    const classes = useStyles();

    // Navigation

    const navigateToHome = () => {
        window.location.pathname = '/'
    }

    const navigateToAbout = () => {
        window.location.pathname = '/about'
    }

    const navigateToEvents = () => {
        window.location.pathname = '/events'
    }

    const navigateToProjects = () => {
        window.location.pathname = '/projects'
    }

    return(
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Button
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={navigateToHome}
                    >

                        <DSC_Horizontal_Icon
                            height={60}
                            width={330}
                        />
                    </Button>

                    <Typography variant="h6" className={classes.title}>

                    </Typography>

                    <Button
                        className={classes.buttonText}
                        onClick={navigateToHome}
                    >Home</Button>
                    <Button
                        className={classes.buttonText}
                        onClick={navigateToAbout}
                    >About</Button>
                    <Button
                        className={classes.buttonText}
                        onClick={navigateToEvents}
                    >Events</Button>
                    <Button
                        className={classes.buttonText}
                        onClick={navigateToProjects}
                    >Projects</Button>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;