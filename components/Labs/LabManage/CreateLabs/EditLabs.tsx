import { Box, Button, Grid, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import ImageIcon from '@mui/icons-material/Image';
import TabHome from './TabHome';
import axios from 'axios';
import { useQueryFetchId } from '../../../../utils/useQueryFetch';



export default function EditLabs() {


    const [role, setRole]: any = useState();

    const router = useRouter();
    const { id } = router.query;

    const [lab_img, setLabImg]: any = useState(null);
    const { fetchedData: lab } = useQueryFetchId("lab", id);
    console.log("data" ,lab)




    const AddImages = (event: any) => {

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.patch(`images`, formData).then((response) => {

            console.log(response);
            setLabImg(response.data.result.file_location)

        })
    }


    const formik = useFormik({
        initialValues: {
            // role: '',
            name: lab?.name,
            profile: lab?.profile,
            website: lab?.website,
            lab_admin_name: lab?.lab_admin_name,
            lab_admin_mobile: lab?.lab_admin_mobile,
            langtitude_altitude: lab?.langtitude_altitude,
            lab_contact_no: lab?.lab_contact_no,
            lab_email: lab?.lab_email,
            lab_reg_no: lab?.lab_reg_no,
            description: lab?.description,
            location: '',
            
            meta_tag: '',
            meta_tag_keyword: '',
        },
        enableReinitialize: true,
        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            axios.patch(`lab/${id}`, {
                image: lab_img,
                role: role,
                name: values.name,
                profile: values.profile,
                website: values.website,
                lab_admin_name: values.lab_admin_name,
                langtitude_altitude: values.langtitude_altitude,
                location: values.location,
                lab_contact_no: values.lab_contact_no,
                lab_reg_no: values.lab_reg_no,
                lab_email: values.lab_email,
                description: values.description


            }).then((response) => {

                console.log(response);
                alert("submit success")
                router.push('/labs')
            })

        },
    });

    const labs = [

        {
            title: "Lab Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]


    const lab2 = [

        {
            title: "Lab Reg no",
            label: "lab_reg_no",
            type: "number",
            value: formik.values.lab_reg_no,
            touched: formik.touched.lab_reg_no,
            errors: formik.errors.lab_reg_no,
        },
        {
            title: "Lab Number",
            label: "lab_contact_no",
            type: "number",
            value: formik.values.lab_contact_no,
            touched: formik.touched.lab_contact_no,
            errors: formik.errors.lab_contact_no,
        },
        {
            title: "Admin Name",
            label: "lab_admin_name",
            type: "text",
            value: formik.values.lab_admin_name,
            touched: formik.touched.lab_admin_name,
            errors: formik.errors.lab_admin_name,
        },
        {
            title: "Lab Email",
            label: "lab_email",
            type: "email",
            value: formik.values.lab_email,
            touched: formik.touched.lab_email,
            errors: formik.errors.lab_email,
        },

        {
            title: "Admin Number",
            label: "lab_admin_mobile",
            type: "number",
            value: formik.values.lab_admin_mobile,
            touched: formik.touched.lab_admin_mobile,
            errors: formik.errors.lab_admin_mobile,
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



    const tabData2 = [

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

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Lab</Typography>

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

                                    {labs.map((data, index) =>

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
                                                // helperText={data.touched && data.errors}
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

                                                    {lab_img === null ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                                        :

                                                        <img src={lab_img} width="100%" />

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

                                {lab2.map((data, index) =>

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
                                                // helperText={data.touched && data.errors}
                                            />

                                        </Box>

                                    </Grid>
                                )}

                            </Grid>

                        </Grid>

                    </form>

                    <TabHome formik={formik}

                        tabData1={tabData1}
                        tabData2={tabData2}

                    />




                </Box>

            </Grid>

        </Grid >

    )
}
