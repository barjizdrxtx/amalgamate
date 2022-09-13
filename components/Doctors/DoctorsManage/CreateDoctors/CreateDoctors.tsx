import React, { useState } from 'react'
import { Box, TextField, Grid, Button, Typography, Select, MenuItem, Stack, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import { clinicSchemea } from './validation';
import axios from 'axios';

import { useRouter } from 'next/router';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { TabHome } from './TabHome';
import { PhotoCamera } from '@mui/icons-material';

import ImageIcon from '@mui/icons-material/Image';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DropDown } from '../../../UI/DropDown/DropDown';

export const CreateDoctors = () => {

    const [role, setRole] = useState("null");

    const [doctor_img, setDoctor_img] = useState(null);

    const [certificates, setCertificates] = useState([{ id: 1 }]);

    const [specialisedIn, setSpecialisedIn] = useState([{ id: 1 }]);

    const [id_proof, setId_proof] = useState([{ id: 1 }]);

    const [gender, setGender] = useState("null");


    const router = useRouter();

    const [value, setValue] = React.useState<Date | null>(
        new Date(''),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };



    const AddImages = (event: any) => {

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            console.log(response);
            setDoctor_img(response.data.result.file_location)

        })
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            registration_number: '',
            email: '',
            mobile: '',
            image_location: '',
            years_of_experience: '',
            qualificaton: '',
            profile: '',

            short_profile: '',
            academic_achievments: '',
            professional_contributions: '',
            affliation: '',

            practice: '',
            consulation_fee: '',
            specilized_tag: '',

            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',

        },
        // validationSchema: doctorSchemea,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`doctors`, {

                name: values.name,
                role: role,
                specialisedIn: specialisedIn,
                registration_number: values.registration_number,
                email: values.email,
                mobile: values.mobile,
                address: {
                    address1: "string",
                    address2: "string",
                    city: "string",
                    state: "string"
                },
                gender: gender,
                image_id: "string",
                image_location: doctor_img,
                years_of_experience: values.years_of_experience,
                dateOfBirth: "2022-09-13T18:41:40.248Z",
                qualificaton: values.qualificaton,
                certificates: certificates,
                profileText: {
                    short_profile: values.short_profile,
                    academic_architecture: values.academic_achievments,
                    professional_contributions: values.professional_contributions,
                    affliation: values.affliation
                },
                practice: values.practice,
                is_authorized: true,
                id_proof: id_proof,
                consulation_fee: values.consulation_fee,
                specilized_tag: values.specilized_tag

            })


            const axiosrequest2 = axios.post(`meta-tags`, {

                title: values.meta_title,
                description: values.meta_tag_description,
                keyword: values.meta_tag_keyword,

            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {
                console.log(res1);
                console.log(res2);
                alert("submit success")
                router.push('/doctors')
            }));

        },
    });


    const doctors = [

        {
            title: "Mr / Mrs",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]


    const doctors2 = [

        {
            title: "Mobile Number",
            label: "mobile",
            type: "number",
            value: formik.values.mobile,
            touched: formik.touched.mobile,
            errors: formik.errors.mobile,
        },

        {
            title: "Email Id",
            label: "email",
            type: "email",
            value: formik.values.email,
            touched: formik.touched.email,
            errors: formik.errors.email,

        },
    ]

    const tabData1 = [
        {
            title: "Registration Number",
            label: "registration_number",
            type: "text",
            rows: 6,
            value: formik.values.registration_number,
            touched: formik.touched.registration_number,
            errors: formik.errors.registration_number,
        },
    ]



    const tabData3 = [

        {
            title: "Short Profile",
            label: "short_profile",
            type: "text",
            rows: 2,
            value: formik.values.short_profile,
            touched: formik.touched.short_profile,
            errors: formik.errors.short_profile,
        },

        {
            title: "Profile",
            label: "profile",
            type: "number",
            rows: 6,
            value: formik.values.profile,
            touched: formik.touched.profile,
            errors: formik.errors.profile,
        },


        {
            title: "Academic Achievments",
            label: "academic_achievments",
            type: "text",
            rows: 2,
            value: formik.values.academic_achievments,
            touched: formik.touched.academic_achievments,
            errors: formik.errors.academic_achievments,
        },
        {
            title: "Professional Contributions",
            label: "professional_contributions",
            type: "text",
            rows: 2,
            value: formik.values.professional_contributions,
            touched: formik.touched.professional_contributions,
            errors: formik.errors.professional_contributions,
        },
        {
            title: "Affliation",
            label: "affliation",
            type: "text",
            rows: 2,
            value: formik.values.affliation,
            touched: formik.touched.affliation,
            errors: formik.errors.affliation,
        },
    ]



    const tabData8 = [


        {
            title: "Meta Title",
            label: "meta_title",
            type: "text",
            rows: 1,
            value: formik.values.meta_title,
            touched: formik.touched.meta_title,
            errors: formik.errors.meta_title,
        },
        {
            title: "Meta Tag Keyword",
            label: "meta_tag_keyword",
            type: "text",
            rows: 4,
            value: formik.values.meta_tag_keyword,
            touched: formik.touched.meta_tag_keyword,
            errors: formik.errors.meta_tag_keyword,
        },
        {
            title: "Meta Tag Description",
            label: "meta_tag_description",
            type: "text",
            rows: 6,
            value: formik.values.meta_tag_description,
            touched: formik.touched.meta_tag_description,
            errors: formik.errors.meta_tag_description,
        },

    ]



    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 6, lg: 0 } }} >

            <Grid container justifyContent="center" xl={12}>

                <Box sx={{ width: "100%", }}>

                    <Box sx={{
                        width: "100%", display: "flex",
                        justifyContent: "space-between", alignItems: "center",
                    }}>


                        <Box sx={{ width: "100%", display: "flex", m: 2 }}>

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Doctors</Typography>

                        </Box>


                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton bgColor="#239B56" onClick={formik.handleSubmit}>Create Doctors</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/clinics')}>Cancel</CustomizedButton >

                        </Box>


                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>

                                    <DropDown
                                        text="Role"
                                        dropData={["Doctor", "Admin", "Nurse", "Staff"]}
                                        value={role}
                                        setValue={setRole}
                                    />

                                    {doctors.map(data =>

                                        <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                                <Typography>{data.title}</Typography>

                                            </Box>

                                            < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                                fullWidth
                                                id={data.label}
                                                name={data.label}
                                                // label={data.label}
                                                value={data.value}
                                                type={data.type}
                                                onChange={formik.handleChange}
                                                error={data.touched && Boolean(data.errors)}
                                                helperText={data.touched && data.errors}
                                            />

                                        </Box>

                                    )}




                                </Grid>


                                <Grid container lg={6} >

                                    <Grid container lg={6} >

                                        <Grid lg={8}>

                                            <Box sx={{
                                                display: "flex", flexDirection: "column", justifyContent: "end",
                                                alignItems: "end",
                                            }}>

                                                <Box sx={{ width: "50%" }}>

                                                    <Box sx={{
                                                        backgroundColor: "lightgray", width: "150px", mb: 2,
                                                        height: "100px", display: "flex", justifyContent: "center", alignItems: "center"
                                                    }}>

                                                        {doctor_img === null ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                                            :

                                                            <img src={doctor_img} width="100%" />

                                                        }

                                                    </Box>

                                                </Box>

                                                <Box sx={{ display: "flex", width: "50%" }}>

                                                    <Stack direction="row" alignItems="center" spacing={2}>

                                                        <Button variant="contained" component="label">
                                                            Upload

                                                            <input hidden type='file' key="image" id="outlined-basic"

                                                                onChange={(event: any) => AddImages(event)} />

                                                        </Button>

                                                    </Stack>

                                                </Box>

                                            </Box>

                                        </Grid>

                                    </Grid>


                                </Grid>

                            </Grid>


                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                {doctors2.map(data =>

                                    <Grid lg={6}>

                                        <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                                <Typography>{data.title}</Typography>

                                            </Box>

                                            < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                                fullWidth
                                                id={data.label}
                                                name={data.label}
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

                                <Grid lg={6}>

                                    <DropDown
                                        text="Gender"
                                        dropData={["Male", "Female", "Other"]}
                                        value={gender}
                                        setValue={setGender}
                                    />


                                </Grid>


                                <Grid lg={6}>

                                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                            <Typography>Date of Birth</Typography>

                                        </Box>

                                        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ flex: 2, width: "100%", mb: 2 }}>

                                            <Stack sx={{ flex: 2, width: "100%", mb: 2 }}>
                                                <DesktopDatePicker
                                                    // label="Date desktop"
                                                    inputFormat="MM/dd/yyyy"
                                                    value={value}
                                                    onChange={handleChange}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider>

                                    </Box>

                                </Grid>


                            </Grid>

                        </Grid>

                    </form>

                    <TabHome formik={formik}
                        tabData1={tabData1}
                        tabData3={tabData3}
                        tabData8={tabData8}
                    />


                </Box>

            </Grid>

        </Grid >


    )
}