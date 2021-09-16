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
            <div class="row mt-5">
                <div class="col d-flex justify-content-center">
                    <BudgetCard/>
                </div>
                <div >
                    <table class="row d-flex">
                        <thead>
                            <th >Spent</th>
                            <th>budget</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rent</td>
                                <td>$1,984</td>
                                <td>$2,000</td>
                            </tr>
                            <tr>
                                <td>Rent</td>
                                <td>$1,984</td>
                                <td>$2,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.buttonarea}>
                    <Button className={classes.addbutton}>ADD CATEGORY</Button>
                    <Button className={classes.budgetbutton}>REBALANCE BUDGET</Button>         
                </div>
            </div>
        </div>
    );

}

export default Categories;