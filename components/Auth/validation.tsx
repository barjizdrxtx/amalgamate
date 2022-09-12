import * as yup from 'yup';

export const loginSchemea = yup.object({

    username: yup
        .string()
        .required('User Name is required'),

    password: yup
        .string()
        .required('Password is required'),

});
