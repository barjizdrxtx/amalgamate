import { Divider, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/system';
import { HCLTabHome } from '../../../MainTab/HCLTabHome';
import { CreateButton } from '../../../UI/Button/CreateButton';
import { ImagePreview, MultiImagePreview } from '../../../UI/ImagePreview/ImagePreview';


export const CreateAdvertisement = ({ path = 'advertisement' }) => {

    const router = useRouter();

    const [web_image, setWebImage] = useState([{ id: 1 }]);

    const [mobile_image, setMobileImage] = useState([{ id: 1 }]);


    console.log("web_image", web_image)


    const formik = useFormik({
        initialValues: {
            heading: '',
            sub_heading: '',
            description: '',
            url: '',
            valid_from: '',
            valid_upto: '',
            latitude_longitude: '',
            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',
        },

        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(path, {

                mode: "big",
                heading: values.heading,
                sub_heading: values.sub_heading,
                description: values.description,
                url: values.url,
                valid_from: "2022-11-19T06:22:22.742Z",
                valid_upto: "2022-11-19T06:22:22.742Z",
                latitude_longitude: "string",
                web_images: web_image,
                mobile_images: mobile_image

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



    const advertisement = [

        {
            title: "Heading",
            label: "heading",
            type: "text",
            value: formik.values.heading,
            touched: formik.touched.heading,
            errors: formik.errors.heading,
        },

        {
            title: "Sub Heading",
            label: "sub_heading",
            type: "text",
            value: formik.values.sub_heading,
            touched: formik.touched.sub_heading,
            errors: formik.errors.sub_heading,
        },
        {
            title: "Description",
            label: "description",
            type: "text",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description,
        },
        {
            title: "URL",
            label: "url",
            type: "text",
            value: formik.values.url,
            touched: formik.touched.url,
            errors: formik.errors.url,
        },
        {
            title: "Valid From",
            label: "valid_from",
            type: "email",
            value: formik.values.valid_from,
            touched: formik.touched.valid_from,
            errors: formik.errors.valid_from,
        },

        {
            title: "Valid Upto",
            label: "valid_upto",
            type: "number",
            value: formik.values.valid_upto,
            touched: formik.touched.valid_upto,
            errors: formik.errors.valid_upto,
        },
        {
            title: "Latitude_longitude",
            label: "latitude_longitude",
            type: "text",
            value: formik.values.latitude_longitude,
            touched: formik.touched.latitude_longitude,
            errors: formik.errors.latitude_longitude,
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


                            {advertisement.map((data, index) =>

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

                            <Typography sx={{ fontWeight: "bold", m: 1 }}>Web Image</Typography>

                            <MultiImagePreview image={web_image} setImage={setWebImage} />

                        </Grid>


                        <Divider />


                        <Grid>

                            <Typography sx={{ fontWeight: "bold", m: 1 }}>Mobile Image</Typography>

                            <MultiImagePreview image={mobile_image} setImage={setMobileImage} />

                        </Grid>

                    </form>


                </Box>

            </Grid>

        </Grid >

    )
}