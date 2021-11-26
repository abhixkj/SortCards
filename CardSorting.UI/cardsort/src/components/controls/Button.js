import React from "react";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export default function MUIButton(props) {
  const { size, color, variant, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Button
          variant={variant || "contained"}
          size={size || "large"}
          color={color || "primary"}
          fullWidth
          {...other}
        >
          {props.children}
        </Button>
      </ThemeProvider>
    </div>
  );
}
