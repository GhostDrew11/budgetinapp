import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingCard from './Dashboard_components/UpcomingCard';
import IncomeCard from './Dashboard_components/IncomeCard';

const useStyles = makeStyles((theme) => ({

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
        textTransform: "uppercase",
        fontWeight: "normal",
        color: "grey"
    },
    budgetarea: {
        marginTop: "45px",
        marginLeft: "30px"
    },

    upcomingarea: {
        marginTop: "30px",
        marginLeft: "30px",
        marginRight: "30px"
    },
    ucards: {
        marginTop: "20px",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between"
    },
    incomearea: {
        marginTop: "30px",
        marginLeft: "30px"
    },
    icard: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center"
    }

    
}));

function Dashboard() {

    const classes = useStyles();
    return (
    <div className='Container'>
      <h1 className={classes.header}>Dashboard</h1>
      <div class="row">
        <div className={classes.budgetarea}>
            <h1 className={classes.specific}>Budgets</h1>
        </div>
      </div>
      <div className={classes.upcomingarea}>
        <h1 className={classes.specific}>Upcoming</h1>
        <div className={classes.ucards}>
            <div >
                <UpcomingCard/>
            </div>
            <div >
                <UpcomingCard/>
            </div>
        </div>
      </div>
      <div className={classes.incomearea}>
        <h1 className={classes.specific}>Income</h1>
        <div className={classes.icard}>
            <IncomeCard/>
        </div>
      </div>
    </div>
    );

}

export default Dashboard;