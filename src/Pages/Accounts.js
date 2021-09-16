import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@material-ui/core";
import AccountCard from './Accounts_components/Accountcard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "16px",
        marginLeft: "18px",
    },
    specific: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "16px",
    },
    addbutton: {
        textAlign: "center",
        borderRadius: "30px",
        border: "1px solid grey",
        // width: "180px",
        alignSelf: "flex-end",
        textTransform: "lowercase",
        height: "30px",
        marginRight: "50px",
        color: "grey",
    },
    buttondarea: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "14px"
    },
    typo: {
        paddingTop: 50
    },
}));

function Accounts() {

    const classes = useStyles();
    return (
        <div class="container">
            <h1 className={classes.header}>Accounts</h1>
            <div className={classes.buttondarea}>
                <Button className={classes.addbutton}>add</Button>
            </div>
            <div class="row">
                <div class="col-sm-3 offset-sm-1">
                    <h1 className={classes.specific}>Credit Cards</h1>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3 offset-sm-1">
                    <AccountCard/>
                </div>
                <div class="col-sm-3 offset-sm-3">
                    <AccountCard/>
                </div>
            </div>
            <div className = {classes.typo}>
                <div class= 'row'>
                <div class="col-sm-3 offset-sm-1">
                    <h1 className={classes.specific}>Debit Cards</h1>
                </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-3 offset-sm-1">
                    <AccountCard/>
                </div>
                <div class="col-sm-3 offset-sm-3">
                    <AccountCard/>
                </div>
            </div>
        </div>
    );

}

export default Accounts;