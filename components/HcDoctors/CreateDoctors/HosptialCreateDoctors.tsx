import React, { useState } from 'react'
import { Box, TextField, Grid, Typography, Stack } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CreateButton } from '../../UI/Button/CreateButton';
import { DropDown } from '../../UI/DropDown/DropDown';
import { TabHome } from '../../Doctors/DoctorsManage/CreateDoctors/TabHome';


export const HosptialCreateDoctors = ({ path = 'doctors' }) => {

    const [image, setImage] = useState([{ id: 1 }]);

    const router = useRouter();

    const { institution_id } = router.query

    const [alternate_mobile_numbers, setAlternate_mobile_numbers] = useState([{ id: 1 }]);


    const [documents, setDocuments] = useState([{ id: 1 }]);

    const [certificates, setCertificates] = useState([{ id: 1 }]);

    const [specialisedIn, setSpecialisedIn] = useState([{ id: 1 }]);

    const [idProof, setIdProof] = useState([{ id: 1 }]);

    const [gender, setGender] = useState("null");

    const [value, setValue] = React.useState<Date | null>(
        new Date(''),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };



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
            success_stories: '',

            practice: '',
            consulation_fee: '',
            specilized_tag: '',

            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',


        },
        // validationSchema: doctorSchemea,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`doctors/institution-doctors`, {

                name: values.name,
                specialisedIn: specialisedIn,
                registration_number: values.registration_number,
                email: values.email,
                mobile: values.mobile,
                alternate_mobile_numbers: alternate_mobile_numbers,
                address: {
                    address1: "string",
                    address2: "string",
                    city: "string",
                    district: "string",
                    state: "string"
                },

                location: "string",
                latitude_longitude: "string",
                gender: gender,
                images: image,
                years_of_experience: values.years_of_experience,
                dateOfBirth: "2022-11-05T07:56:46.926Z",
                qualificaton: values.qualificaton,
                certificates: certificates,
                profileText: {
                    short_profile: values.short_profile,
                    academic_architecture: values.academic_achievments,
                    professional_contributions: values.professional_contributions,
                    affliation: values.affliation,
                    badge: "string",
                    success_stories: "string"
                },
                practice: values.practice,
                is_authorized: true,
                id_proof: "id_proof",
                specilized_tag: values.specilized_tag,
                languages_spoken: [
                    "string"
                ],
                consultation_fee: values.consultation_fee,
                institution: "hospital",
                institution_id: institution_id,
                department_id: "string",
                role: "string",
                serial_number: "string",
                branch_id: "string",
                available_time: "string",
                concession_fee: 0,
                notes: "string",
                remarks: "string",
                attributes: "string"

            })


            const axiosrequest2 = axios.post(`meta-tags`, {

                title: values.meta_title,
                description: values.meta_tag_description,
                keyword: values.meta_tag_keyword,

            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {

                alert("submit success")

                router.push(`/hospitals/doctors?institution_id=${institution_id}`)

            }));

        },
    });



    const doctors2 = [

        {
            title: "Mr / Mrs",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },


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
        {
            title: "Registration Number",
            label: "registration_number",
            type: "registration_number",
            value: formik.values.registration_number,
            touched: formik.touched.registration_number,
            errors: formik.errors.registration_number,

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
        {
            title: "consulation_fee",
            label: "registration_number",
            type: "text",
            rows: 5,
            value: formik.values.consulation_fee,
            touched: formik.touched.consulation_fee,
            errors: formik.errors.consulation_fee,
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
        {
            title: "Success Stories",
            label: "success_stories",
            type: "text",
            rows: 6,
            value: formik.values.success_stories,
            touched: formik.touched.success_stories,
            errors: formik.errors.success_stories,

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


                    <CreateButton buttonName="Create Hospital" title={path}
                        onCreate={formik.handleSubmit}
                    />

                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


                            {doctors2.map((data: any, index: any) =>

                                <Grid lg={4}>

                                    <Box key={index} sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                            <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

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

                            <Grid lg={4}>

                                <DropDown
                                    text="Gender"
                                    dropData={["Male", "Female", "Other"]}
                                    value={gender}
                                    setValue={setGender}
                                />

                            </Grid>


                            <Grid lg={4}>

                                <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                                    <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                        <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Date of Birth</Typography>

                                    </Box>

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>

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

                    </form>

                    <TabHome formik={formik}

                        tabData1={tabData1}
                        tabData3={tabData3}

                        tabData8={tabData8}

                        alternate_mobile_numbers={alternate_mobile_numbers}
                        setAlternate_mobile_numbers={setAlternate_mobile_numbers}

                        documents={documents}
                        setDocuments={setDocuments}

                        image={image}
                        setImage={setImage}

                        certificates={certificates}
                        setCertificates={setCertificates}

                        idProof={idProof}
                        setIdProof={setIdProof}

                        specialisedIn={specialisedIn}
                        setSpecialisedIn={setSpecialisedIn}

                    />

                </Box >

            </Grid >

        </Grid >

    )
}