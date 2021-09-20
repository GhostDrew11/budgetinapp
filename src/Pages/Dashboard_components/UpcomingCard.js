import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
      height: 50,
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}));

function UpcomingCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
              <div className={classes.content}>
                    <div>
                        Lemonade Ins
                    </div>
                    <div>
                        $5.00
                    </div>
              </div>
            </CardContent>
        </Card>
    );
}

export default UpcomingCard;