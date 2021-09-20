import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Progressbar from '../Categories_components/Progressbar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      height: 100,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    labels: {
        display: 'flex',
        flexDirection: 'column',       
    }
}));

function DueCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.labels}>
                    <div >
                        $1,994
                    </div>
                    <div >
                        left to pay
                    </div>
                </div>
                <div>
                    <Progressbar/>
                </div>
                <div className={classes.labels}>
                    <div >
                        $0
                    </div>
                    <div >
                        paid so far
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DueCard;