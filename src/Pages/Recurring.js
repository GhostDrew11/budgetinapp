import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Typography} from "@material-ui/core";
import DueCard from './Recurring_components/DueCard';
import RecurringCard from './Recurring_components/RecurringCard';

const useStyles = makeStyles((theme) => ({

    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "16px",
        marginLeft: "18px",
    },
    duearea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "55px",
    },
    labelarea: {
        marginTop: "30px", 
        marginLeft: "75px",
        color: "grey",
        textTransform: "uppercase",
        fontWeight: "16px"
    },
    list: {
        display: "flex",
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: "30px", 
        marginLeft: "200px",
        marginRight: "200px",
    },
}));

function Recurring() {

    const classes = useStyles();
    return (
        <div className='Container'>
            <h1 className={classes.header}>Recurring</h1>
            <div className={classes.duearea}>
                <DueCard/>
            </div>
            <div className={classes.labelarea}>
                THIS MONTH
            </div>
            <div className={classes.list}>
                <div>
                    <RecurringCard/>
                </div>
                <div>
                    <RecurringCard/>
                </div>
                <div>
                    <RecurringCard/>
                </div>
            </div>
            <div className={classes.list}>
                <div>
                    <RecurringCard/>
                </div>
                <div>
                    <RecurringCard/>
                </div>
                <div>
                    <RecurringCard/>
                </div>
            </div>
        </div>
    );

}

export default Recurring;