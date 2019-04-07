import React, { Component } from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, Divider } from '@material-ui/core/';
import asyncValidate from '../FakeServer/asyncValidate';
import renderTextField from '../TextFields/RenderTextFields';
import validate from '../Utils/Validate';
import renderAllErrors from '../Utils/Errors';
import renderCheckbox from '../CheckBox/RenderCheckBoxes';

const styles = theme => ({
    container: {
        maxWidth: '450px',
        width: '100%',
        marginTop: 25,
    },
    paper: {
        padding: '25px 0',
        margin: '0 0 10px',
        border: '2px solid #e6e6e6',
        backgroundColor: '#fff',
        fontSize: '14px',
        borderRadius: '10px',
        // [theme.breakpoints.down('sm')]: {
        //     width: '100%',
        //     border: 0,
        // },
    },
    buttonForm: {
        color: '#fff',
        margin: '45px 40px 8px',
        backgroundColor: "#337ab7",
        '&:hover': {
            backgroundColor: '#337ab7',
        },
        fontWeight: 600,
        textTransform: 'initial',
        padding: '5px 9px',
        minHeight: '30px',
    },
    formContainer: {
        marginBottom: '10px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        // padding: '0 40px',
        display: 'flex',
        justifyContent: 'center',
    }
});

class RegisterForm extends Component {

    render() {
        const { handleSubmit, pristine, submitting, classes, submitFunc } = this.props;
        return (
            <div className={classes.container}>
                <Paper className={classes.paper} elevation={0} square>
                    <div className={classes.info}>
                        <Fields names={[
                            'strength',
                            'repeat',
                            'password'
                        ]} component={renderAllErrors} />
                    </div>
                </Paper>
                <Paper className={classes.paper} elevation={0} square>
                    <div className={classes.formContainer}>
                        <Typography variant="h5" align="center" gutterBottom>Join us at Izberg !</Typography>
                        <Divider />
                        <form onSubmit={handleSubmit(submitFunc)} className={classes.form}>
                            <Field name="login" component={renderTextField} label="Username" />
                            <Field name="password" type="password" component={renderTextField} label="Password" />
                            <Field name="password_repeat" type="password" component={renderTextField} label="Re-type password" />
                            <Field name="cgu" component={renderCheckbox} label="I agree to the Terms and Conditions"/>
                            <Button variant="contained" type="submit" disabled={pristine || submitting} className={classes.buttonForm}>Count me in !</Button>
                        </form >
                    </div>
                </Paper>
            </div>
        )
    }
}

RegisterForm = reduxForm({
    form: 'RegisterForm',
    validate,
    asyncValidate
})(RegisterForm)

export default withStyles(styles)(RegisterForm)