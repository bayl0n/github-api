import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}));

const AppNavBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        GitHub API
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppNavBar;