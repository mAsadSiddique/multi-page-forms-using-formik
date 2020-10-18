import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields3() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="E-mail" />
            <br />
            <TextField id="standard-basic" label="Password" />
            <br />
            <TextField id="standard-basic" label="Repeat Password" />
            <br />
            <Button variant="outlined" color="primary">
                Primary
    </Button>
        </form>
    );
}
