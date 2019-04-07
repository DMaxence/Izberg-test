import React from 'react';
import { Typography } from '@material-ui/core/';

function check(password) {
    if (
        password.length >= 6 &&
        password.match(/[A-Z]/g) &&
        password.match(/[[^$.|?*+()]/g) &&
        !password.match(/[ ]/g) &&
        !password.match(/[^\n]*\n/g)
    ) {
        return true
    }
    return false
}

const renderAllErrors = fields => (
    <div>
        {!fields.strength.meta.error && fields.password.input.value.length === 0 && <Typography variant="body1" gutterBottom>
            Password strength : very weak
        </Typography>}
        {!fields.strength.meta.error && check(fields.password.input.value) && <Typography variant="body1" gutterBottom>
            Password strength : strong
        </Typography>}
        {fields.strength.meta.error && <Typography variant="body1" gutterBottom>
            Password strength : {fields.strength.meta.error}
        </Typography>}
        <Typography variant="body1" gutterBottom>
            {fields.repeat.meta.error}
        </Typography>
    </div>
);

export default renderAllErrors;