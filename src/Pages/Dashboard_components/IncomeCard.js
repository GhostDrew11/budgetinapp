import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      height: 75,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    specific :{
        display: "flex",
        justifyContent: "flex-end"
    },
    labels: {
        display: 'flex',
        flexDirection: 'column',       
    }
}));

function IncomeCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
              <div className={classes.labels}>
                    <div>
                        $0.00
                    </div>
                    <div>
                        earned so far    
                    </div>
              </div>
              <div className={classes.labels}>
                    <div className={classes.specific}>
                        $2.800
                    </div>
                    <div>
                        earned last month
                    </div>
              </div>
            </CardContent>
        </Card>
    );
}

export default IncomeCard;