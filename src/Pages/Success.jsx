import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core/';

const styles = theme => ({
    container: {
        maxWidth: '450px',
        width: '100%',
        marginTop: 25,
    },
    paperTop: {
        padding: '25px 0',
        // margin: '0 0 10px',
        borderBottom: 'none',
        border: '2px solid #e6e6e6',
        backgroundColor: '#fff',
        fontSize: '14px',
        borderRadius: '10px 10px 0 0',
        // [theme.breakpoints.down('sm')]: {
        //     width: '100%',
        //     border: 0,
        // },
    },
    paperBottom: {
        padding: '25px 0',
        height: 300,
        margin: '0 0 10px',
        border: '2px solid #e6e6e6',
        backgroundColor: '#fff',
        fontSize: '14px',
        borderRadius: '0 0 10px 10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // [theme.breakpoints.down('sm')]: {
        //     width: '100%',
        //     border: 0,
        // },
    },
});

function mapStateToProps(state) {
    return { user: state.user[0] }
}

class Success extends Component {
    render() {
        const { classes, user } = this.props;
        return (
            <div className={classes.container}>
                <Paper className={classes.paperTop} elevation={0} square>
                    <Typography variant="h5" align="center" gutterBottom>Join us at Izberg !</Typography>
                </Paper>
                <Paper className={classes.paperBottom} elevation={0} square>
                    <Typography variant="h6" gutterBottom align="center">
                        Welcome, {user.login}
                    </Typography>
                </Paper>
            </div>
        )
    }
}
export default withStyles(styles)(connect(mapStateToProps)(Success));