import React from "react";
import useStyles from "./styles";
import s from "./contentHeader.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { TextField, Grid, IconButton, Container } from "@material-ui/core";

const MainHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={s.contentHeader}>
      <Grid container justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standart" />
        </form>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default MainHeader;
