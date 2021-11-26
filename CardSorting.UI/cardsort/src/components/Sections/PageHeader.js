import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
    paddingLeft: theme.spacing(5),

  },
  pageHeader: {
    padding: theme.spacing(2),
    display: "flex",
    marginBottom: theme.spacing(2)

  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(1),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(6),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
  toolBar: {
    marginLeft: "auto",
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <AppBar position="static">
      <Paper elevation={2} square className={classes.root}>
        <div className={classes.pageHeader}>
          <Card className={classes.pageIcon}>{icon}</Card>
          <div className={classes.pageTitle}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="div">
              {subTitle}
            </Typography>
          </div>
          <div className={classes.toolBar}>
            <Toolbar>
              <Grid container alignItems="center">               
              </Grid>
            </Toolbar>
          </div>
        </div>
      </Paper>
    </AppBar>
  );
}
