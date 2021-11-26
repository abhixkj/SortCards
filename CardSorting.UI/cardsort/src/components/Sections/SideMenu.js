import React from 'react'
import { withStyles } from "@material-ui/core";
import TextRotateVerticalIcon from "@material-ui/icons/TextRotateVertical";

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '70px',
        height: '100vh',
        backgroundColor: '#253053'
    },
    sideLogo: {
        height: 'auto',
        padding: '2px',
        marginTop: '20px',
        color: "#61dafb",
        width: 'auto'
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <TextRotateVerticalIcon className={classes.sideLogo} />
        </div>
    )
}

export default withStyles(style)(SideMenu);
