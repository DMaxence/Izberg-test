import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        margin: '8px 40px',
    },
});

const renderTextField = ({
    classes,
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

export default withStyles(styles)(renderTextField);