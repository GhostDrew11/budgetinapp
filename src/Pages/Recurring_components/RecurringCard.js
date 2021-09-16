import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 100,
      height: 100,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

function ReccuringCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
              <div className={classes.content}>
                    <div>
                        Lemonade
                    </div>
                    <div>
                        $5.00
                    </div>
                    <div>
                        Overdue
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ReccuringCard;