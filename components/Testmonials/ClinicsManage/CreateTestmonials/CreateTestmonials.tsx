import { Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/system';
import { HCLTabHome } from '../../../MainTab/HCLTabHome';
import { CreateButton } from '../../../UI/Button/CreateButton';
import { MultiImagePreview } from '../../../UI/ImagePreview/ImagePreview';


export const CreateTestmonials = ({ path = 'testmonials' }) => {

    const router = useRouter();

    const [image, setImage] = useState([{ id: 1 }]);


    const formik = useFormik({

        initialValues: {
            name: '',
            content: '',
            image: '',
            patient_id: '',
            type: '',
            icon: '',
            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',
        },

        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(path, {

                name: "string",
                content: "string",
                image: "string",
                patient_id: "string",
                type: "string",
                icon: "string"

            })

            const axiosrequest2 = axios.post(`meta-tags`, {

                title: values.meta_title,
                description: values.meta_tag_description,
                keyword: values.meta_tag_keyword,

            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {
                alert("submit success")
                router.push(`/${path}`)
            }));

        },
    });



    const testmonials = [

        {
            title: "Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

        {
            title: "Content",
            label: "content",
            type: "number",
            value: formik.values.content,
            touched: formik.touched.content,
            errors: formik.errors.content,
        },
    ]



    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 6, lg: 0 } }} >

            <Grid container justifyContent="center" xl={12}>

                <Box sx={{ width: "100%", }}>


                    <CreateButton buttonName="Create" title={path}
                        onCreate={formik.handleSubmit}
                    />

                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


                            {testmonials.map((data, index) =>

                                <Grid key={index} lg={4}>

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

                        </Grid>

                        <Grid>


                            <MultiImagePreview image={image} setImage={setImage} />


                        </Grid>

                    </form>


                </Box>

            </Grid>

        </Grid >

    )
}