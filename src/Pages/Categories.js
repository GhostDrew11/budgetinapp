import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@material-ui/core";
import BudgetCard from './Categories_components/Budgetcard';


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
    buttonarea: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
        marginTop: "30px"
    },
    budgetarea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "55px",
    },
    labelarea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: "30px",
        marginRight: "250px"
    },
    spentlabel: {
        display: "flex",
        marginRight: "75px"
    },
    listitem: {
        display: "flex",
        marginRight: "500px"
    },
    list: {
        display: "flex",
        //justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: "7px", 
        marginLeft: "75px",
        marginRight: "250px",
    },
    addbutton: {
        textAlign: "center",
        borderRadius: "12px",
        border: "1px solid grey",
        width: "180px",
        height: "30px",
        marginRight: "20px",
        color: "grey",
    },
    budgetbutton: {
        textAlign: "center",
        borderRadius: "12px",
        border: "1px solid grey",
        width: "180px",
        height: "30px",
        marginLeft: "20px",
        color: "grey",
    },
    table: {
        margin: "60px 0",
    },
    thead: {
        marginLeft: "650px",
    }
}));


function Categories() {
    const classes = useStyles();
    return (
        <div class="container">
            <h1 className={classes.header}>Categories</h1>
            <div className={classes.budgetarea}>
                <BudgetCard/>
            </div>
            <div className={classes.labelarea}>
                <div className={classes.spentlabel}>Spent</div>
                <div>Budget</div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listitem}>
                    Rent
                </div>
                <div className={classes.spentlabel}>
                    $1,984
                </div>
                <div>
                    $2,000
                </div>
            </div>
            <div className={classes.buttonarea}>
                    <Button className={classes.addbutton}>ADD CATEGORY</Button>
                    <Button className={classes.budgetbutton}>REBALANCE BUDGET</Button>         
            </div>
        </div>
    );

}

export default Categories;