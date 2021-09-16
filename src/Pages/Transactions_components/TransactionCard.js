import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      height: 140,
    },
    label1: {
        display: 'flex',
        justifyContent: 'center',
    },
    labelsr2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelsr4:{
        display: 'flex',
        justifyContent: 'center',
        color: "grey",
        paddingTop: 12,
    },
}));

function TransactionCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
              <div className = {classes.label1}>
                January
              </div>
              <div className = {classes.labelsr2}>
                    <div >
                        $2,800
                    </div>
                    <div >
                        $2,304
                    </div>
                    <div >
                        $1,326
                    </div>     
              </div>
              <div className = {classes.labelsr2}>
                    <div >
                        Total Income
                    </div>
                    <div >
                        Total Spent
                    </div>
                    <div >
                        Total Budget
                    </div>    
              </div>
              
              <div className = {classes.labelsr4}>
                OPEN YOUR MONTH IN REVIEW
              </div>
            </CardContent>
        </Card>
    );
}

export default TransactionCard;