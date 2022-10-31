import React, { useState } from 'react'
import { Box, TextField, Grid, Typography, Stack } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TabHome } from './TabHome';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DropDown } from '../../../UI/DropDown/DropDown';
import { CreateButton } from '../../../UI/Button/CreateButton';

export const CreateDoctors = ({ path = 'doctors' }) => {

    const [role, setRole] = useState("null");

    const [image, setImage] = useState([{ id: 1 }]);

    const [documents, setDocuments] = useState([{ id: 1 }]);

    const [certificates, setCertificates] = useState([{ id: 1 }]);

    const [specialisedIn, setSpecialisedIn] = useState([{ id: 1 }]);

    const [idProof, setIdProof] = useState([{ id: 1 }]);

    const [gender, setGender] = useState("null");


    const router = useRouter();

    const [value, setValue] = React.useState<Date | null>(
        new Date(''),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };


    const [language, setLanguage] = useState([

        {
            title: "English",
            checked: false,
        },
        {
            title: "Malayalam",
            checked: false,
        },
        {
            title: "Hindi",
            checked: false,
        },

        {
            title: "Tamil",
            checked: false,
        },
    ]);


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
            latitude_longitude: '',

            district: '',

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

            address1: '',
            address2: '',
            city: '',
            state: '',

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
                    address1: values.address1,
                    address2: values.address2,
                    city: values.city,
                    state: values.state,
                    district: values.district,
                },
                gender: gender,
                images: image,
                languages_spoken: language,
                latitude_longitude: values.latitude_longitude,
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
                id_proof: idProof,
                consulation_fee: values.consulation_fee,
                specilized_tag: values.specilized_tag,
            })


            const axiosrequest2 = axios.post(`meta-tags`, {

                title: values.meta_title,
                description: values.meta_tag_description,
                keyword: values.meta_tag_keyword,

            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {

                alert("submit success")
                router.push('/doctors')
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
            type: "number",
            value: formik.values.registration_number,
            touched: formik.touched.registration_number,
            errors: formik.errors.registration_number,

        },
        {
            title: "Consulation Fee",
            label: "consulation_fee",
            type: "number",
            value: formik.values.consulation_fee,
            touched: formik.touched.consulation_fee,
            errors: formik.errors.consulation_fee,
        },

    ]


    const tabData1 = [

        {
            title: "address1",
            label: "address1",
            type: "number",
            value: formik.values.address1,
            touched: formik.touched.address1,
            errors: formik.errors.address1,
        },

        {
            title: "address2",
            label: "address2",
            type: "number",
            value: formik.values.address2,
            touched: formik.touched.address2,
            errors: formik.errors.address2,
        },

        {
            title: "City",
            label: "city",
            type: "number",
            value: formik.values.city,
            touched: formik.touched.city,
            errors: formik.errors.city,
        },

        {
            title: "State",
            label: "state",
            type: "number",
            value: formik.values.state,
            touched: formik.touched.state,
            errors: formik.errors.state,
        },

        {
            title: "District",
            label: "district",
            type: "number",
            value: formik.values.district,
            touched: formik.touched.district,
            errors: formik.errors.district,
        },

        {
            title: "Latitude Longitude",
            label: "latitude_longitude",
            type: "number",
            value: formik.values.latitude_longitude,
            touched: formik.touched.latitude_longitude,
            errors: formik.errors.latitude_longitude,
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
            type: "text",
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

                    <CreateButton title={path}
                        onCreate={formik.handleSubmit}
                    />

                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                            <Grid lg={4}>

                                <DropDown
                                    text="Role"
                                    dropData={["Doctor", "Admin", "Nurse", "Staff"]}
                                    value={role}
                                    setValue={setRole}
                                />

                            </Grid>


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

                        language={language}
                        setLanguage={setLanguage}

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