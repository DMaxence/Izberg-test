import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    checkBox: {
        margin: '8px 40px',
    },
});

const renderCheckbox = ({
    classes,
    input,
    label,
}) => (
        <div>
            <FormControlLabel
                className={classes.checkBox}
                control={
                    <Checkbox
                        checked={input.value ? true : false}
                        onChange={input.onChange}
                    />
                }
                label={label}
            />
        </div>
    )

export default withStyles(styles)(renderCheckbox);