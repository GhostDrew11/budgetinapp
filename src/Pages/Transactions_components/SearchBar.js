import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 450,
      height: 25,
      borderRadius: "30px",
      border: "1px solid grey", 
    }
}));

function SearchBar(){

    const classes = useStyles();

    return(
        <div class="search"> 
            <input type="text" className={classes.root} placeholder="Search..." />
        </div>
    );
}

export default SearchBar;