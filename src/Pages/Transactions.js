import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionCard from './Transactions_components/TransactionCard';
import SearchBar from './Transactions_components/SearchBar';

const useStyles = makeStyles((theme) => ({

    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "16px",
        marginLeft: "18px",
    },
    searcharea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "30px",
        marginLeft: "18px",
        marginRight: "50px",
    },
    labelarea: {
        marginTop: "70px", 
        marginLeft: "75px",
        color: "grey",
        textTransform: "uppercase",
        fontWeight: "16px"
    },
    labelarea2: {
        marginTop: "18px", 
        marginLeft: "75px",
        color: "grey",
        textTransform: "uppercase",
        fontWeight: "16px"
    },
    list: {
        display: "flex",
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: "18px", 
        marginLeft: "75px",
        marginRight: "50px",
    },
    list2: {
        display: "flex",
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: "7px", 
        marginLeft: "75px",
        marginRight: "50px",
    }
}));

function Transactions() {

    const classes = useStyles();
    return (
        <div className='Container'>
            <h1 className={classes.header}>Transactions</h1>
            <div className={classes.searcharea}>
                <div >
                    <SearchBar/>
                </div>
                <div >
                    <TransactionCard/>
                </div>
            </div>
            <div className={classes.labelarea}>
                <h2>MON, JANUARY 4</h2>
            </div>
            <div className={classes.list}>
                <div>
                    Publix
                </div>
                <div>
                    GROCERIES
                </div>
                <div>
                    $13.80
                </div>
            </div>
            <div className={classes.list2}>
                <div>
                    Publix
                </div>
                <div>
                    GROCERIES
                </div>
                <div>
                    $13.80
                </div>
            </div>
            <div className={classes.labelarea2}>
                <h2>SUN, JANUARY 3</h2>
            </div>
            <div className={classes.list}>
                <div>
                    Starbucks
                </div>
                <div>
                    RESTAURANTS
                </div>
                <div>
                    $5.73
                </div>
            </div>
            <div className={classes.list2}>
                <div>
                    Starbucks
                </div>
                <div>
                    RESTAURANTS
                </div>
                <div>
                    $5.73
                </div>
            </div>


        </div>
    );

}

export default Transactions;