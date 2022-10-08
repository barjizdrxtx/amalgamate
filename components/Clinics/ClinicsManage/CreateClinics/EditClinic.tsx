
import React, { useState } from 'react'
import { Box, TextField, Grid, Button, Typography, Select, MenuItem, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { clinicSchemea } from './validation';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import ImageIcon from '@mui/icons-material/Image';
import { TabHome } from '../../TabHome';
import { useQueryFetchId } from '../../../../hooks/useQueryFetch';

export const EditClinic = () => {

    const [image, setImage]: any = useState();


    const [preview, setPreview]: any = useState();


    const [documents, setDocuments]: any = useState();

    //     const [checkbox,setCheckbox]:any=useState(

    // {
    // ac,
    // parking,
    // ambulance,
    // internet_wifi,

    // }


    //     );

    const [role, setRole]: any = useState();

    const router = useRouter();
    const { id } = router.query;

    // const { fetchedData } = useQueryFetch("clinic-categories");

    const { fetchedData: clinics } = useQueryFetchId("clinics", id);

    console.log("clinics", clinics)

    const formik = useFormik({
        initialValues: {
            // role: '',
            name: clinics?.result?.name,
            profile: clinics?.result?.profile,
            website: clinics?.result?.website,
            clinic_admin_name: clinics?.result?.clinic_admin_name,
            clinic_admin_mobile: clinics?.result?.clinic_admin_mobile,
            longitude_latitude: clinics?.result?.longitude_latitude,
            clinic_contact_no: clinics?.result?.clinic_contact_no,
            clinic_email: clinics?.result?.clinic_email,
            clinic_reg_no: clinics?.result?.clinic_reg_no,
            description: clinics?.result?.description,
            location: clinics?.result?.location,
            latitude: clinics?.result?.latitude,
            meta_tag: '',
            meta_tag_keyword: '',
            add_more: clinics?.result?.add_more,
        },
        enableReinitialize: true,
        validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            const formData = new FormData();

            formData.append('clinic_image', image);
            formData.append('role', role);
            formData.append('name', values.name);
            formData.append('profile', values.profile);
            formData.append('website', values.website);
            formData.append('clinic_admin_name', values.clinic_admin_name);
            formData.append('clinic_admin_mobile', values.clinic_admin_mobile);
            formData.append('longitude_latitude', values.longitude_latitude);
            formData.append('location', values.location);
            formData.append('clinic_contact_no', values.clinic_contact_no);
            formData.append('clinic_email', values.clinic_email);
            formData.append('clinic_reg_no', values.clinic_reg_no);
            formData.append('description', values.description);

            formData.append('documents', documents);

            axios.patch(`clinics/${id}`, formData).then((response) => {

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
            title: "Email",
            label: "clinic_email",
            type: "email",
            value: formik.values.clinic_email,
            touched: formik.touched.clinic_email,
            errors: formik.errors.clinic_email,
        },

        {
            title: "Admin Number",
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
            title: "Longitude_Latitude",
            label: "longitude_latitude",
            type: "text",
            rows: 1,
            value: formik.values.longitude_latitude,
            touched: formik.touched.longitude_latitude,
            errors: formik.errors.longitude_latitude,
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



    const tabData8 = [

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

    const tabData3 = [

        {
            title: "Ac",

        },
        {
            title: "Parking",


        },
        {
            title: "Ambulance",


        },

        {
            title: "Internet/wifi",


        },

        {
            title: "Add More",
            label: "add_more",
            type: "text",
            rows: 4,
            value: formik.values.add_more,
            touched: formik.touched.add_more,
            errors: formik.errors.add_more,
        },


    ]

    const tabData4 = [

        {
            title: "Procedures",
            label: "procedure",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]
    const tabData5 = [

        {
            title: "Specialities",
            label: "specialities",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
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

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Edit Clinic</Typography>

                        </Box>

                        {/* 
                        <Typography variant="h5" color="green">Clinic Details</Typography> */}

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton bgColor="#239B56" onClick={formik.handleSubmit}>Create Clinic</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/clinics')}>Cancel</CustomizedButton >

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

                                    {clincs.map(data =>

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

                                                    {preview == undefined ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                                        :

                                                        <img src={preview} width="100%" />

                                                    }

                                                </Box>

                                            </Box>

                                            <Box sx={{ display: "flex", width: "50%" }}>

                                                <Stack direction="row" alignItems="center" spacing={2}>

                                                    <Button variant="contained" component="label">
                                                        Upload

                                                        <input hidden type='file' key="image" id="outlined-basic"
                                                            onChange={(e: any) => {
                                                                setImage((e.target.files[0]))
                                                                setPreview(URL.createObjectURL(e.target.files[0]))
                                                            }
                                                            } />

                                                    </Button>

                                                </Stack>

                                            </Box>

                                        </Box>

                                    </Grid>



                                </Grid>

                            </Grid>


                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                {clincs2.map(data =>

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

                            </Grid>

                        </Grid>

                    </form>

                    <TabHome formik={formik}
                        tabData1={tabData1}
                        tabData3={tabData3}
                        tabData4={tabData4}
                        tabData5={tabData5}
                        tabData8={tabData8}
                    />


                </Box>

            </Grid>

        </Grid >


    )
}