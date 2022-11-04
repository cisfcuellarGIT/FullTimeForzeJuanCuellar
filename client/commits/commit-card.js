import React, { useState } from "react";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Collapse } from '@material-ui/core';
import CallMadeIcon from "@material-ui/icons/CallMade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    card: {
        width: 500,
        margin: "auto",
        marginTop: theme.spacing(4),
        backgroundColor: '#FFF',
    },
    title: {
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
            1
        )}px`,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textAlign: "center",
        fontWeight: 600,
    },
    icon: {
        fontSize: `1.2rem`,
    },
    iconButton: {
        padding: `${theme.spacing(0)}px`,
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: theme.spacing(3),
        textAlign: "center",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

function CommitCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.container}>
                    <div style={{ gridColumnEnd: "span 6" }}>
                        <Typography variant="body1">Author: {props.author}</Typography>
                    </div>
                    <div style={{ gridColumnEnd: "span 6" }}>
                        <Typography variant="body2" color="primary">
                            {props.date}
                        </Typography>
                    </div>
                    <div style={{ gridColumnEnd: "span 12" }}>
                        <Typography variant="body2" color="primary">
                            {props.tittle}
                        </Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={classes.iconButton}
                    target="_blank"
                    href={props.url}
                    aria-label="link"
                >
                    <CallMadeIcon className={classes.icon} />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List dense>
                    {props.message.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <Typography>• {item}</Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </Collapse>
        </Card>
    );
}

export default CommitCard;
