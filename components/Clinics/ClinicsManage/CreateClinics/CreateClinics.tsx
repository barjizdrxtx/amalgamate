import { Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { useFormik } from 'formik';
import { TabHome } from './TabHome';
import { Box, Stack } from '@mui/system';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';


export default function CreateClinics() {

    const [role, setRole]: any = useState();

    const router = useRouter();

    const [clinic_img, setClinicImg]: any = useState(null);

    const [amineties, setAmenities] = useState([

        {
            title: "Ac",
            checked: false,
        },
        {
            title: "Parking",
            checked: false,
        },
        {
            title: "Ambulance",
            checked: false,
        },

        {
            title: "Internet/wifi",
            checked: false,
        },
    ]);

    const AddImages = (event: any) => {

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            console.log(response);
            setClinicImg(response.data.result.file_location)

        })
    }


    const formik = useFormik({
        initialValues: {
            // role: '',
            name: '',
            profile: '',
            website: '',
            clinic_admin_name: '',
            clinic_admin_mobile: '',
            langtitude_altitude: '',
            clinic_contact_no: '',
            clinic_email: '',
            clinic_reg_no: '',
            description: '',
            location: '',
            latitude: '',
            meta_tag: '',
            meta_tag_keyword: '',
            add_more: ''
        },

        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            axios.post(`clinics`, {
                image_location: clinic_img,
                role: role,
                name: values.name,
                profile: values.profile,
                website: values.website,
                clinic_admin_name: values.clinic_admin_name,
                langtitude_altitude: values.langtitude_altitude,
                location: values.location,
                clinic_contact_no: values.clinic_contact_no,
                clinic_reg_no: values.clinic_reg_no,
                clinic_email: values.clinic_email,
                description: values.description,
                add_more: values.add_more,
                amineties: amineties

            }).then((response) => {

                console.log(response);
                alert("submit success")
                router.push('/clinics')
            })

        },
    });

    const clincs = [

        {
            title: "Clinic Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]


    const clincs2 = [

        {
            title: "Clinic Reg no",
            label: "clinic_reg_no",
            type: "number",
            value: formik.values.clinic_reg_no,
            touched: formik.touched.clinic_reg_no,
            errors: formik.errors.clinic_reg_no,
        },
        {
            title: "Clinic Number",
            label: "clinic_contact_no",
            type: "number",
            value: formik.values.clinic_contact_no,
            touched: formik.touched.clinic_contact_no,
            errors: formik.errors.clinic_contact_no,
        },
        {
            title: "Admin Name",
            label: "clinic_admin_name",
            type: "text",
            value: formik.values.clinic_admin_name,
            touched: formik.touched.clinic_admin_name,
            errors: formik.errors.clinic_admin_name,
        },
        {
            title: "Clinic Email",
            label: "clinic_email",
            type: "email",
            value: formik.values.clinic_email,
            touched: formik.touched.clinic_email,
            errors: formik.errors.clinic_email,
        },

        {
            title: "Clinic Admin Mobile",
            label: "clinic_admin_mobile",
            type: "number",
            value: formik.values.clinic_admin_mobile,
            touched: formik.touched.clinic_admin_mobile,
            errors: formik.errors.clinic_admin_mobile,
        },
        {
            title: "Website",
            label: "website",
            type: "text",
            value: formik.values.website,
            touched: formik.touched.website,
            errors: formik.errors.website,
        },

    ]

    //INFO
    const tabData1 = [

        {
            title: "Location",
            label: "location",
            type: "text",
            rows: 1,
            value: formik.values.location,
            touched: formik.touched.location,
            errors: formik.errors.location,
        },
        {
            title: "Latitude",
            label: "latitude",
            type: "number",
            rows: 1,
            value: formik.values.latitude,
            touched: formik.touched.latitude,
            errors: formik.errors.latitude,
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
            title: "Description",
            label: "description",
            type: "number",
            rows: 6,
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description,
        },
    ]


    //PROCEDURES
    const tabData3 = [

        {
            title: "Procedures",
            label: "procedure",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]

    //SPECIALIZATION
    const tabData4 = [

        {
            title: "Specialities",
            label: "specialities",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]


    //SEO
    const tabData5 = [

        {
            title: "Meta Tag",
            label: "meta_tag",
            type: "text",
            rows: 1,
            value: formik.values.meta_tag,
            touched: formik.touched.meta_tag,
            errors: formik.errors.meta_tag,
        },
        {
            title: "Meta Tag Keyword",
            label: "meta_tag_keyword",
            type: "number",
            rows: 6,
            value: formik.values.meta_tag_keyword,
            touched: formik.touched.meta_tag_keyword,
            errors: formik.errors.meta_tag_keyword,
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

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Clinic</Typography>

                        </Box>

                        {/* 
            <Typography variant="h5" color="green">Clinic Details</Typography> */}

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton bgColor="#239B56" onClick={formik.handleSubmit}>Create Lab</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/labs')}>Cancel</CustomizedButton >

                        </Box>


                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>

                                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                            <Typography>Role</Typography>

                                        </Box>

                                        <Select sx={{ flex: 2, width: "100%", mb: 2 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Age"
                                            onChange={(e: any) => setRole(e.target.value)}
                                        >
                                            <MenuItem value="Doctor">Doctor</MenuItem>
                                            <MenuItem value="Admin">Admin</MenuItem>
                                            <MenuItem value="Nurse">Nurse</MenuItem>
                                            <MenuItem value="Staff">Staff</MenuItem>
                                        </Select>

                                    </Box>

                                    {clincs.map((data, index) =>

                                        <Box key={index} sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

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

                                                    {clinic_img === null ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                                        :

                                                        <img src={clinic_img} width="100%" />

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


                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                {clincs2.map((data, index) =>

                                    <Grid key={index} lg={6}>

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

                            </Grid>

                        </Grid>

                    </form>

                    <TabHome formik={formik}

                        tabData1={tabData1}
                        tabData3={tabData3}
                        tabData4={tabData4}
                        tabData5={tabData5}
                        amineties={amineties}
                        setAmenities={setAmenities}
                    />

                </Box>

            </Grid>

        </Grid >

    )
}