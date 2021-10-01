import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationDrawer from '../navigationDrawer'
const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		open: false,
	});

	const toggleDrawer = (open) => {
		setState({ ...state, open });
	};

	return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={()=>toggleDrawer(true)}
                    size="large">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Sensyne Health Front End Test
                </Typography>
            </Toolbar>
        </AppBar>
        <NavigationDrawer open={state.open} toggleDrawer={toggleDrawer}/>
    </>;
}