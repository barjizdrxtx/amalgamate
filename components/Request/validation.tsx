import * as yup from 'yup';

export const validationSchema = yup.object({

    client_id: yup
        .string()
        .required('Cliend Id is required'),

    customer_name: yup
        .string()
        .required('Customer Name is required'),

    shop_name: yup
        .string()
        .required('Shop Name is required'),

    contact_number: yup
        .string(),
        // .min(10, 'Phone Number should be of minimum 10 characters length'),

    owner_contact_no: yup
        .string(),
        // .min(10, 'Phone Number should be of minimum 10 characters length'),

    email: yup
        .string()
        .email('Enter a valid email')

});

