import * as yup from 'yup';

export const clinicSchemea = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    // clinic_reg_no: yup
    //     .string()
    //     .required('clinic reg no is required'),
    // clinic_contact_no: yup
    //     .string()
    //     .min(1, 'Clinic Contact Number should be of minimum 10 characters length')
    //     .required('Clinic Contact Number is required'),
    // clinic_admin_name: yup
    //     .string()
    //     .required('Registration Number is required'),
    // clinic_email: yup
    //     .string()
    //     .email('Enter a valid email')
    //     .required('Email is required'),
    // clinic_admin_mobile: yup
    //     .string()
    //     .min(1, 'Admin Number should be of minimum 10 characters length')
    //     .required('Admin Number is required'),
    // website: yup
    //     .string()
    //     .required('Medical Speciality is required'),

    // location: yup
    //     .string()
    //     .required('Location is required'),

    // description: yup
    //     .string()
    //     .required('description is required'),
});

