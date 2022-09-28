import React, { useState } from 'react'
import { Box, TextField, Grid, FormGroup, FormControlLabel, Checkbox, Button, Typography, Select, MenuItem, Stack, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';

import { useRouter } from 'next/router';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { PhotoCamera } from '@mui/icons-material';

import ImageIcon from '@mui/icons-material/Image';
import { diseaseSchema } from './validation';
import TabHome from './TabHome';
import { PRIMARY_COLOR } from '../../../../utls/colors';


export const CreateCategory = () => {

    const [image, setImage]: any = useState();

    const [preview, setPreview]: any = useState();

    const [documents, setDocuments]: any = useState();

    console.log("image", image)


    const router = useRouter();

    const formik = useFormik({

        initialValues: {

            name: '',
            description: '',
            meta_title: '',
            meta_description: '',
            meta_keyword: ''

        },

        validationSchema: diseaseSchema,

        onSubmit: (values: any) => {

            const formData = new FormData();

            formData.append('icon', image);
            formData.append('name', values.name);
            formData.append('description', values.description);

            formData.append('documents', documents);

            axios.post(`diseases-categories`, formData).then((response) => {

                console.log(response);
                alert("submit success")
                router.push('/diseases')
            }).catch((error) => {
                console.log(error)
            }
            )

        },
    });

    const clincs = [

        {
            title: "Category Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]


    const diseasesForm = [
        {
            title: "Description",
            label: "description",
            type: "text",
            rows: 6,
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description,
        },

    ]


    const tabData1 = [

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
            label: "meta_description",
            type: "number",
            rows: 6,
            value: formik.values.meta_description,
            touched: formik.touched.meta_description,
            errors: formik.errors.meta_description,
        },
        {
            title: "Meta Keyword",
            label: "meta_keyword",
            type: "number",
            rows: 6,
            value: formik.values.meta_keyword,
            touched: formik.touched.meta_keyword,
            errors: formik.errors.meta_keyword,
        },
    ]



    console.log("image", image)

    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 6, lg: 0 } }} >

            <Grid container justifyContent="center" xl={12}>

                <Box sx={{ width: "100%", }}>

                    <Box sx={{
                        width: "100%", display: "flex",
                        justifyContent: "space-between", alignItems: "center",
                    }}>


                        <Box sx={{ width: "100%", display: "flex", m: 2 }}>

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Disease Category</Typography>

                        </Box>

                        {/* 
                        <Typography variant="h5" color="green">Clinic Details</Typography> */}

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton  bgColor={PRIMARY_COLOR} onClick={formik.handleSubmit}>Create Disease Category</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/diseases')}>Cancel</CustomizedButton >

                        </Box>


                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>

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

                                                        <input hidden type='file' key="dp" id="outlined-basic"
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

                                {diseasesForm.map(data =>

                                    <Grid lg={6}>

                                        <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                                <Typography>{data.title}</Typography>

                                            </Box>

                                            < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                                fullWidth
                                                id={data.label}
                                                name={data.label}
                                                multiline
                                                rows={data.rows}
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

                    />

                </Box>

            </Grid>

        </Grid >


    )
}