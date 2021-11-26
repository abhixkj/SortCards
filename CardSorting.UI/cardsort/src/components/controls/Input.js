import React from "react";
import { blue } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  textField: {
    "min-width": "30ch",
  },
}));

export default function Input(props) {
  const { name, label, onChange, size, value, error = null, ...other } = props;
  const mUIClasses = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TextField
          variant="outlined"
          label={label}
          name={name}
          onChange={onChange}
          className={mUIClasses.textField}
          size={size}
          value={value}
          inputProps={{
            maxLength: props.maxLength
          }}
          multiline={props.multiline ? props.multiline : false}
          placeholder={props.placeholder ? props.placeholder : null}
          {...other}
          {...(error && { error: true, helperText: error })}
        />
      </ThemeProvider>
    </div>
  );
}
