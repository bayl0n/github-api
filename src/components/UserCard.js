import React, { useState } from 'react'
import { Typography, Card, CardContent, Link, CardHeader, CardMedia, CardActions, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function UserCard(props) {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
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
    )
}

export default UserCard
