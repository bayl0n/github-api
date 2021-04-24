import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../actions/userActions';

import { Box, Typography, Card, CardContent, Link, CardHeader, CardMedia, CardActions, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';

function UserCard(props) {

    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    const handleRemove = () => {
        dispatch(removeUser(props.login));
    }

    return (
        <Box style={{ position: "relative" }}>
            <IconButton onClick={handleRemove} style={{ position: "absolute", top: "-1.6rem", right: "-1.5rem" }}>
                <RemoveCircleRoundedIcon fontSize="default" htmlColor="rgb(200, 100, 100)" />
            </IconButton>

            <Card align="left">
                <Link href={props.htmlURL} target="_blank">
                    <CardMedia component="img" height="200" src={props.avatarURL} />
                </Link>
                <CardHeader title={props.login} subheader={props.name} />
                {props.bio !== null ?
                    <>
                        <CardActions>
                            <IconButton onClick={handleClick}>
                                <ExpandMoreIcon />
                                <Typography variant="body1" color="textSecondary">More</Typography>
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} unmountOnExit>
                            <CardContent>
                                <Typography variant="h6" color="textSecondary">Bio</Typography>
                                <Typography variant="body1" color="textPrimary">
                                    {props.bio}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </>
                    : null
                }
            </Card>
        </Box>
    )
}

export default UserCard
