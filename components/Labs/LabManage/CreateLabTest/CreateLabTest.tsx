import { Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { useFormik } from 'formik';
import { Box, Stack } from '@mui/system';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { DropDown } from '../../../UI/DropDown/DropDown';
import { MultiImagePreview } from '../../../UI/ImagePreview/ImagePreview';
import { PRIMARY_COLOR } from '../../../../utls/colors';


export const CreateLabTest = () => {

    const [gender, setGender] = useState("null");

    const router = useRouter();

    const formik = useFormik({

        initialValues: {

            test_name: '',
            item_code: '',
            group_name: '',
            method: '',
            specimen: '',
            serial_number: '',
            test_note: '',
            gender: '',
            category: '',
        },

        // validationSchema: labSchema,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`lab-tests`, {

                test_name: values.test_name,
                item_code: values.item_code,
                group_name: values.group_name,
                method: values.method,
                specimen: values.specimen,
                remarks: "string",
                serial_number: values.serial_number,
                test_note: values.test_note,
                attributes: "string",
                gender: gender,
                category: values.category,
                test_details: [
                    {
                        item_code: "string",
                        test_name: "string",
                        refferance_range: "string",
                        unit: "string",
                        serial_number: 0,
                        test_note: "string",
                        attributes: "string"
                    }
                ]


            })

            const axiosrequest2 = axios.post(`meta-tags`, {

                title: values.meta_title,
                description: values.meta_tag_description,
                keyword: values.meta_tag_keyword,

            })

            // you could also use destructuring to have an array of responses
            axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function (res1, res2) {

                alert("submit success")
                router.push('/lab')
            }));

        },
    });


    const labtest = [

        {
            title: "Test Name",
            label: "test_name",
            type: "text",
            value: formik.values.test_name,
            touched: formik.touched.test_name,
            errors: formik.errors.test_name,
        },

        {
            title: "Item Code",
            label: "item_code",
            type: "text",
            value: formik.values.item_code,
            touched: formik.touched.item_code,
            errors: formik.errors.item_code,
        },
        {
            title: "Group name",
            label: "group_name",
            type: "text",
            value: formik.values.group_name,
            touched: formik.touched.group_name,
            errors: formik.errors.group_name,
        },
        {
            title: "Method",
            label: "method",
            type: "text",
            value: formik.values.method,
            touched: formik.touched.method,
            errors: formik.errors.method,
        },
        {
            title: "Specimen",
            label: "specimen",
            type: "email",
            value: formik.values.specimen,
            touched: formik.touched.specimen,
            errors: formik.errors.specimen,
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

                            <CustomizedButton bgColor={PRIMARY_COLOR} onClick={formik.handleSubmit}>Create Lab Test</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/lab')}>Cancel</CustomizedButton >

                        </Box>

                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>


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

                                    <DropDown
                                        text="Gender"
                                        dropData={["Both", "Male", "Female"]}
                                        value={gender}
                                        setValue={setGender}
                                    />


                                </Grid>

                            </Grid>

                        </Grid>

                    </form>

                </Box>

            </Grid>

        </Grid >

    )
}