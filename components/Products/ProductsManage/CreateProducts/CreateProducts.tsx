import { Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/system';
import { CreateButton } from '../../../UI/Button/CreateButton';
import { DropDown } from '../../../UI/DropDown/DropDown';
import { useQueryFetch } from '../../../../hooks/useQueryFetch';

export const CreateProducts = ({ path = 'products' }) => {

    const router = useRouter();


    const [value, setValue] = useState("null");

    const { fetchedData: fetchedData } = useQueryFetch('categories')

    const products = fetchedData?.result

    console.log("products", products)


    const formik = useFormik({

        initialValues: {

            name: '',
            price: '',
            category: '',
            aboutProduct: ''

        },

        // validationSchema: clinicSchemea,

        onSubmit: (values: any) => {

            const axiosrequest = axios.post(path, {

                name: values.name,
                price: values.price,
                category: value,
                aboutProduct: values.aboutProduct,


            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest]).then(axios.spread(function (res) {
                alert("submit success")
                router.push(`/${path}`)
            }));

        },
    });



    const list = [

        {
            title: "Product Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },
        {
            title: "Price",
            label: "price",
            type: "number",
            value: formik.values.price,
            touched: formik.touched.price,
            errors: formik.errors.price,
        },
        {
            title: "About Product",
            label: "aboutProduct",
            type: "text",
            value: formik.values.aboutProduct,
            touched: formik.touched.aboutProduct,
            errors: formik.errors.aboutProduct,
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

                            {list.map((data: any, index: any) =>

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

                            <Grid lg={4}>

                                <DropDown
                                    text="Category"
                                    dropData={products}
                                    value={value}
                                    setValue={setValue} />

                            </Grid>

                        </Grid>

                    </form>

                </Box>

            </Grid>

        </Grid >

    )
}