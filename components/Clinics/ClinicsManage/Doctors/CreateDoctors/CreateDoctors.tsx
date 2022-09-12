import React, { useState } from 'react'
import { Box, TextField, Grid, FormGroup, FormControlLabel, Checkbox, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import { doctorSchemea } from '../validation';
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';
import { TabBar } from './TabBar';


export const CreateDoctors = () => {

    const [image, setImage]: any = useState();

    const [documents, setDocuments]: any = useState();

    const [department, setDepartment]: any = useState();

    const [gender, setGender]: any = useState();

    const router = useRouter();

    const clinic_id: any = router.query.clin


    console.log("clinic_id", clinic_id)


    const formik = useFormik({
        initialValues: {
            name: '',
            specialisedIn: '',
            registration_number: '',
            email: '',
            mobile: '',
            years_of_experience: '',
            city: '',
            state: '',
            qualificaton: '',
            profileText: '',
            consultation_fee: '',
        },

        validationSchema: doctorSchemea,

        onSubmit: (values: any) => {

            const address: any = {
                address1: "string",
                address2: "string",
                city: values.city,
                state: values.experience
            }

            const formData = new FormData();

            formData.append('name', values.name);
            formData.append('specialisedIn', values.specialisedIn);
            formData.append('registration_number', values.registration_number);
            formData.append('email', values.email);
            formData.append('mobile', values.mobile);
            formData.append('address', JSON.stringify(address));
            formData.append('gender', gender);
            formData.append('dp', image);
            formData.append('years_of_experience', values.years_of_experience);
            // formData.append('dateOfBirth', 'dateOfBirth');
            formData.append('qualificaton', values.qualificaton);
            formData.append('profileText', "profileText");
            formData.append('documents', documents);
            formData.append('clinic_id', clinic_id);
            formData.append('consulation_fee', values.consulation_fee);

            axios.post(`doctors/clinic-doctors`, formData).then((response) => {

                console.log(response);

                alert("submit success")

                router.push({ pathname: '/clinics/doctors', query: { clin: clinic_id } })

            })

        },
    });

    const doctors = [

        {
            title: "name",
            label: "Enter Your Name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },
        {
            title: "specialisedIn",
            label: "Specialised In",
            type: "text",
            value: formik.values.specialisedIn,
            touched: formik.touched.specialisedIn,
            errors: formik.errors.specialisedIn,
        },
        {
            title: "registration_number",
            label: "Registration Number",
            type: "number",
            value: formik.values.registration_number,
            touched: formik.touched.registration_number,
            errors: formik.errors.registration_number,
        },
        {
            title: "email",
            label: "Enter Your Email",
            value: formik.values.email,
            type: "email",
            touched: formik.touched.email,
            errors: formik.errors.email,
        },
        {
            title: "mobile",
            label: "Enter Your Mobile Number",
            value: formik.values.mobile,
            type: "number",
            touched: formik.touched.mobile,
            errors: formik.errors.mobile,
        },
        {
            title: "city",
            label: "City",
            type: "text",
            value: formik.values.city,
            touched: formik.touched.city,
            errors: formik.errors.city,
        },
        {
            title: "state",
            label: "State",
            type: "text",
            value: formik.values.state,
            touched: formik.touched.state,
            errors: formik.errors.state,
        },
        {
            title: "years_of_experience",
            label: "Years of Experience",
            type: "number",
            value: formik.values.years_of_experience,
            touched: formik.touched.years_of_experience,
            errors: formik.errors.years_of_experience,
        },
        {
            title: "qualificaton",
            label: "Qualification",
            type: "text",
            value: formik.values.qualificaton,
            touched: formik.touched.qualificaton,
            errors: formik.errors.qualificaton,
        },

        {
            title: "profileText",
            label: "profile Text",
            type: "number",
            value: formik.values.profileText,
            touched: formik.touched.profileText,
            errors: formik.errors.profileText,
        },
        {
            title: "consulation_fee",
            label: "consultationfee",
            type: "number",
            value: formik.values.consultation_fee,
            touched: formik.touched.consultation_fee,
            errors: formik.errors.consultation_fee,
        },
    ]




    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 6, lg: 0 } }} >

            <Grid container justifyContent="center" xl={12}>


                <Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12} >

                            {doctors.map(data =>

                                <Grid lg={3} >

                                    <Box sx={{ m: 1 }}>

                                        <Typography sx={{ mb: 1 }}>{data.title}</Typography>

                                        < TextField sx={{ width: "100%", mb: 2 }}
                                            fullWidth
                                            id={data.title}
                                            name={data.title}
                                            // label={data.label}
                                            value={data.value}
                                            type={data.type}
                                            onChange={formik.handleChange}
                                            error={data.touched && Boolean(data.errors)}
                                            helperText={data.touched && data.errors}
                                        />


                                    </Box>


                                </Grid>

                            )}

                            <Grid lg={3}>

                                <Box sx={{ m: 1 }}>

                                    <Typography sx={{ mb: 1 }}>Department</Typography>

                                    <Select sx={{ width: "100%" }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={department}
                                        label="Age"
                                        onChange={(e: any) => setDepartment(e.target.value)}
                                    >
                                        <MenuItem value="Anesthesiologists">Anesthesiologists</MenuItem>
                                        <MenuItem value="Cardiologists">Cardiologists</MenuItem>
                                        <MenuItem value="Dermatologists">Dermatologists</MenuItem>
                                    </Select>

                                </Box>

                            </Grid>


                            <Grid lg={3}>

                                <Box sx={{ m: 1 }}>

                                    <Typography sx={{ mb: 1 }}>Gender</Typography>

                                    <Select sx={{ width: "100%" }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={department}
                                        label="Age"
                                        onChange={(e: any) => setGender(e.target.value)}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>

                                </Box>

                            </Grid>

                            <Grid lg={3}>

                                <Box sx={{ m: 1 }}>

                                    <Typography sx={{ mb: 1 }}>Doctor Image</Typography>

                                    <TextField sx={{ width: "100%" }} type='file' key="dp" id="outlined-basic"
                                        variant="outlined" onChange={(e: any) => setImage(e.target.files[0])} />

                                </Box>

                            </Grid>


                            <Grid lg={3}>

                                <Box sx={{ m: 1 }}>

                                    <Typography sx={{ mb: 1 }}>Documents</Typography>

                                    <TextField sx={{ width: "100%" }} type='file' key="documents" id="outlined-basic"
                                        variant="outlined" onChange={(e: any) => setDocuments(e.target.files[0])} />

                                </Box>

                            </Grid>

                        </Grid>

                    </form>


                    <Box>

                        <CustomizedButton bgColor="#239B56" onClick={formik.handleSubmit} sx={{ m: 2 }}>Create Doctors</CustomizedButton >

                        <CustomizedButton bgColor="black"

                            // onClick={() => router.push(`/clinics/doctors/${}`)}

                            onClick={() => router.push({ pathname: '/clinics/doctors', query: { clin: clinic_id } })}


                            sx={{ m: 2 }}>Cancel</CustomizedButton >

                    </Box>

                    <TabBar />

                </Box>

            </Grid>

        </Grid >


    )
}
