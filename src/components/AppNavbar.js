import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton, Popover, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}));

const AppNavBar = (props) => {
    const [anchor, setAnchor] = useState(null);

    const handleClick = (e) => {
        setAnchor(e.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    }

    const open = Boolean(anchor);

    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        GitHub Account Lister
                    </Typography>
                    <Box>
                        <IconButton color="inherit" onClick={handleClick}>
                            <InfoIcon fontSize="small" />
                        </IconButton>
                        <Popover
                            open={open}
                            anchorEl={anchor}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        // transformOrigin={{ vertical: "top", horizontal: "center" }}
                        >
                            <Box style={{ padding: "1rem", maxWidth: "300px" }}>
                                <Typography variant="body1">
                                    Start by searching for a GitHub username in the search box, and the profile will be displayed below.
                                </Typography>
                            </Box>
                        </Popover>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppNavBar;