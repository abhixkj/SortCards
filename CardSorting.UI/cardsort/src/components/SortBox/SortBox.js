import React from "react";
import classes from "./SortBox.css";
import Input from "../controls/Input";
import Button from "../controls/Button";
import FilterNoneSharpIcon from "@material-ui/icons/FilterNoneSharp";

const SortBox = (props) => {
  return (
    <div className={classes.RootContainer}>
      <form
        onSubmit={(elm) => {
          elm.preventDefault();
          props.onSort(props.SortString, props.showDeleted);
        }}
      >
        <div className={classes.SortContainer}>
          <div className={classes.SortBox}>
            <div className={classes.Input}>
              <Input
                label="Cards To Sort"
                variant="outlined"
                onChange={props.onInputChange}
                value={props.SortString}
                size="large"
                fullWidth={true}
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<FilterNoneSharpIcon />}
            fullWidth={false}
            
            onClick={(elm) => {
              elm.preventDefault();
              props.onSort(props.SortString);
            }}
          >
            Sort
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SortBox;
