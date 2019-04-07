const validate = values => {
    const errors = {}
    const requiredFields = [
        'login',
        'password',
        'password_repeat',
        'cgu'
    ]
    const { password, password_repeat } = values
    var strength = 0;
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    if (password) {
        if (password.length >= 6) { strength++ }
        if (password.match(/[A-Z]/g)) { strength++ }
        if (password.match(/[[^$.|?*+()]/g)) { strength++ }
        if (!password.match(/[ ]/g) && !password.match(/[^\n]*\n/g)) { strength++ }
        if (strength <= 2) { errors.strength = 'very weak' }
        else if (strength <= 3) { errors.strength = 'weak' }
        // else if (strength === 4) { errors.strength = 'strong' }
    }
    if (password !== password_repeat) { errors.repeat = "Password re-typed must match password." }
    return errors
}

export default validate;