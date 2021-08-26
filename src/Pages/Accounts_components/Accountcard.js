import React from 'react';
import {Card, CardContent,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) => ({
    root: {
        width:236,
        height:125,
    },
    labels: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        position: 'relative'
    },
    label1: {
        justifyContent: 'flex-start',
    },
    label2: {
        justifyContent: 'flex-end',
    }
}));

function AccountCard() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div>
            <Card className={classes.root}>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Test
                </Typography>
                </CardContent>
            </Card>
          </div>
          <div className={classes.labels} >
            <div /*className={classes.labels}*/>
                Balance 
            </div>
            <div /*className={classes.labels}*/>
                $1300 
            </div>
          </div>
        </div>
    );
}

export default AccountCard;