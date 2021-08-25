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
       // alignContent: "space-between",
        //flexFlow: "column wrap",
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
//   root: {
//     width:425,
//     height:125,
//     maxWidth: "75%",
//     maxHeight: "100%",
//   },
//   buttons: {
//     position: 'absolute',
//     bottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     display: 'flex',
//     left: '50%',
//     flex: 1,
//     right: '50%',
//   },
//   categoryButton: {
//     flex: 1,
//     width: 150,
//     paddingRight: 20
//   },
//   budgetButton: {
//     width: 180,
//     flex: 1,
//   },
//   labels: {
//     justifyContent: 'flex-end',
//     display: 'flex',
//     paddingTop: 40,
//     paddingRight: 50,
//     paddingBottom: 20,
//     position: 'relative'
//   }
}));


function Categories() {
    const classes = useStyles();
    return (
        <div class="container">
            <h1 className={classes.header}>Container</h1>
            <div class="row mt-5">
                <div class="col d-flex justify-content-center">
                    <BudgetCard/>
                </div>
                <div /*class="row mt-5"*/>
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

    // return (
    //     <div className='Container'>
    //     <Typography variant="h4" gutterBottom className ='mt-3'>
    //         Categories
    //     </Typography>
    //     <div class="row mt-4">
    //         <div class="col d-flex justify-content-center">
    //         <BudgetCard/>
    //         </div>
    //     </div>
    //     <div className={classes.labels}>
    //         <div class={classes.labels}>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //             Spent
    //         </Typography>
    //         </div>
    //         <div class={classes.labels}>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //             Budget 
    //         </Typography>
    //         </div>
    //     </div>
    //     <div className={classes.buttons}>
    //         <div className= {classes.categoryButton}>
    //         <Button>ADD CATEGORY</Button>
    //         </div>
    //         <div class= {classes.budgetButton}>
    //         <Button>REBALANCE BUDGET</Button> 
    //         </div>
    //     </div>
    //     </div>    
    // );
}

export default Categories;