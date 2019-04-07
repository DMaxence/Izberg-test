import React, { Component } from 'react';
import { registerUser } from '../Components/Redux/Actions'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import RegisterForm from '../Components/Form/RegisterForm';
import Success from './Success';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '35px',
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            backgroundColor: theme.palette.background.paper,
        },
    },
});


class IndexPage extends Component {

    state = {
        signedIn : false,
    };

    handleSubmit = (values) => {

        const { password, login } = values
        //re check password valid in back-end because we never trust user
        if (
            password.length >= 6 &&
            password.match(/[A-Z]/g) &&
            password.match(/[[^$.|?*+()]/g) &&
            !password.match(/[ ]/g) &&
            !password.match(/[^\n]*\n/g)
        ) {
            this.props.dispatch(registerUser(login))
            this.setState({
                signedIn: true,
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { signedIn } = this.state;
        return (
            <div className={classes.root}>
                {!signedIn && <RegisterForm submitFunc={this.handleSubmit} />}
                {signedIn && <Success />}
            </div>
        )
    }
}

export default withStyles(styles)(connect()(IndexPage))