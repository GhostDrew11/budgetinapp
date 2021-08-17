import React from 'react';

// import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Mainpane from './Components/Mainpane';
import {BrowserRouter as Router ,Route, Switch } from "react-router-dom"; 
import Account from "./Pages/Accounts";
import Categories from "./Pages/Categories";
import Dashboard from "./Pages/Dashboard";
import Recurring from "./Pages/Recurring";
import Transactions from "./Pages/Transactions";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 100,
//     height: 100,
//   },
// }));

function App() {

  //const classes = useStyles();

  return (
    <Router>
      <div className="root"> 
        <div className="header"> 
          <Header></Header> 
        </div>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="mainpane">
          <Switch>
            <Route path="/" exact component={Mainpane} />
            <Route path="/accounts" component={Account} />
            <Route path="/categories" component={Categories} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/recurring" component={Recurring} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
