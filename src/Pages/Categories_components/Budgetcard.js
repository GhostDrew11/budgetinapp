import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Progressbar from './Progressbar';

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

function BudgetCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.labels}>
                    <div >
                        $1,994
                    </div>
                    <div >
                        Spent so far
                    </div>
                </div>
                <div>
                    <Progressbar/>
                </div>
                <div className={classes.labels}>
                    <div >
                        $3,360
                    </div>
                    <div >
                        Total budget
                    </div>
                </div>
              {/* <div className={classes.labelr1}>
                    <div >
                        $1,994
                    </div>
                    <div>
                        <Progressbar/>
                    </div>
                    <div>
                        $3,360
                    </div>
              </div>
              <div className={classes.labelr1}>
                    <div>
                        Total budget
                    </div>
                    <div >
                        Spent so far
                    </div>     
              </div> */}
            </CardContent>
        </Card>
    );
}

export default BudgetCard;