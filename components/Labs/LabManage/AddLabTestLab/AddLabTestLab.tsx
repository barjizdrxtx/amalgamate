import { Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/system';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { DropDown, DropDownApi } from '../../../UI/DropDown/DropDown';
import { useQueryFetch } from '../../../../hooks/useQueryFetch';
import { PRIMARY_COLOR } from '../../../../utls/colors';

export const AddLabTestLab = () => {

    const router = useRouter();

    const { institution_id } = router.query;


    const [labtest_id, setLabTestId] = useState("null");


    const { fetchedData: fetchedData } = useQueryFetch("lab-tests");

    console.log("fetchedData", fetchedData)


    const formik = useFormik({

        initialValues: {

            MRP: '',
            lab_rate: '',
            customer_note: '',
            employee_note: '',
            is_offer_available: '',
            offer_amount_type: '',
            offer_amount_value: '',
            offer_valid_from: '',
            offer_valid_to: '',
        },

        // validationSchema: labSchema,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`lab/add-labtest`, {

                lab_id: institution_id,
                labtest_id: labtest_id,
                MRP: values.MRP,
                lab_rate: values.lab_rate,
                customer_note: values.customer_note,
                employee_note: values.employee_note,
                is_offer_available: false,
                offer_amount_type: values.offer_amount_type,
                offer_amount_value: values.offer_amount_value,
                offer_valid_from: values.offer_valid_from,
                offer_valid_to: values.offer_valid_to,


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
                // router.push({ pathname: `/lab/add-test`, query: { institution_id: institution_id } })

            }));

        },
    });


    const labtest = [

        {
            title: "MRP",
            label: "MRP",
            type: "number",
            value: formik.values.MRP,
            touched: formik.touched.MRP,
            errors: formik.errors.MRP,
        },

        {
            title: "Lab Rate",
            label: "lab_rate",
            type: "number",
            value: formik.values.lab_rate,
            touched: formik.touched.lab_rate,
            errors: formik.errors.lab_rate,
        },
        {
            title: "Customer Note",
            label: "customer_note",
            type: "text",
            value: formik.values.customer_note,
            touched: formik.touched.customer_note,
            errors: formik.errors.customer_note,
        },
        {
            title: "Employee Note",
            label: "employee_note",
            type: "text",
            value: formik.values.employee_note,
            touched: formik.touched.employee_note,
            errors: formik.errors.employee_note,
        },
        {
            title: "Offer Amount Value",
            label: "offer_amount_value",
            type: "number",
            value: formik.values.offer_amount_value,
            touched: formik.touched.offer_amount_value,
            errors: formik.errors.offer_amount_value,
        },
        {
            title: "Offer valid From",
            label: "offer_valid_from",
            type: "date",
            value: formik.values.offer_valid_from,
            touched: formik.touched.offer_valid_from,
            errors: formik.errors.offer_valid_from,
        },
        {
            title: "Offer Valid To",
            label: "offer_valid_to",
            type: "date",
            value: formik.values.offer_valid_to,
            touched: formik.touched.offer_valid_to,
            errors: formik.errors.offer_valid_to,
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

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Lab Test</Typography>

                        </Box>

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton  bgColor={PRIMARY_COLOR} onClick={formik.handleSubmit}>Add Lab Test</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() =>
                                router.push({ pathname: `/lab/add-test`, query: { institution_id: institution_id } })} >
                                Cancel</CustomizedButton >

                        </Box>

                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>

                                    <DropDownApi
                                        text="Test"
                                        dropData={fetchedData?.result}
                                        value={labtest_id}
                                        setValue={setLabTestId}
                                    />



                                    {labtest.map((data: any, index: any) =>

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

                            </Grid>

                        </Grid>

                    </form>

                </Box>

            </Grid>

        </Grid >

    )
}