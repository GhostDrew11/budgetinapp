import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Toolbar, List, ListItemText, ListItem} from '@material-ui/core';
import {useHistory} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "2px solid grey",
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  item: {
    backgroundColor: "grey",
    color: "white",
    marginBottom: theme.spacing(4),
    textAlign: "center",
  }
}));

function Sidebar() {

    const classes = useStyles();

    const sideBarList = [
      {
        text:'Accounts',
        path: '/accounts'
      },
      {
        text:'Transactions',
        path: '/transactions'
      },
      {
        text:'Dashboard',
        path: '/dashboard'
      }, 
      {
        text:'Categories',
        path:'/categories'
      },
      { 
        text:'Recurring',
        path:'/recurring'
      }
    ];

    const history = useHistory();


    return (
    <div className={classes.root}>
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar/>
        <div className={classes.drawerContainer}>
          <List>
            {sideBarList.map((item) => (
              <ListItem button key={item.text} className={classes.item} onClick={() => history.push(item.path)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;