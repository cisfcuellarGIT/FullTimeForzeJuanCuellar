import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import CommitCard from "../commits/commit-card.js";
import getCommits from "../commits/api-commit.js";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
    },
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.info,
        textAlign: 'left',
        fontWeight: 700,
    },
}));

function Home() {
    const classes = useStyles();
    const [commits, setCommits] = useState([]);

    //print data of commits get by the getCommits async function
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        getCommits(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error);
            } else {
                setCommits(data[0]);
                console.log(data[1]);
            }
        });

        return function cleanup() {
            abortController.abort();
        };
    }, []);

    return (
        <Paper className={classes.root} elevation={6}>
            <Typography variant="h4" className={classes.title}>
                Commits App : cisfcuellarGIT/FullTimeForzeJuanCuellar
                <br />
                Author : Juan Cuellar
            </Typography>
            <List dense>
                {commits.map((item, i) => {
                    return (
                        <ListItem key={i}>
                            <CommitCard tittle={item.tittle} author={item.name} url={item.url} date={item.date} message={item.message} />
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    );
}

export default Home;
