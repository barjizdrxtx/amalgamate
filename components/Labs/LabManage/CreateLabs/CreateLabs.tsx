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
import { HCLTabHome } from '../../../MainTab/HCLTabHome';
import { PRIMARY_COLOR } from '../../../../utls/colors';
import { CreateButton } from '../../../UI/Button/CreateButton';


export const CreateLabs = ({ path = 'lab' }) => {

    const [role, setRole] = useState("null");

    const router = useRouter();

    const [image, setImage] = useState([{ id: 1 }]);


    const [documents, setDocuments] = useState([{ id: 1 }]);

    const [procedures, setProcedures] = useState([{ id: 1 }]);

    const [specialities, setSpecialities] = useState([{ id: 1 }]);

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

    const [payments, setPayments] = useState([

        {
            title: "Cash On Delivery",
            checked: false,
        },
        {
            title: "Debit Card",
            checked: false,
        },
        {
            title: "Credit Card",
            checked: false,
        },

        {
            title: "Upi",
            checked: false,
        },
    ]);


    const formik = useFormik({
        initialValues: {
            name: '',
            profile: '',
            website: '',
            lab_admin_name: '',
            lab_admin_mobile: '',
            longitude_latitude: '',
            lab_contact_no: '',
            lab_email: '',
            lab_reg_no: '',
            description: '',
            location: '',
            address: '',
            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',
        },

        // validationSchema: labSchema,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`lab`, {

                name: values.name,
                role: role,
                profile: values.profile,
                website: values.website,
                lab_admin_name: values.lab_admin_name,
                lab_admin_mobile: values.lab_admin_mobile,
                images: image,
                address: values.address,
                location: values.location,
                langtitude_altitude: values.langtitude_altitude,
                lab_contact_no: values.lab_contact_no,
                lab_email: values.lab_email,
                lab_reg_no: values.lab_reg_no,
                description: values.description,
                add_more: values.add_more,
                active: true,
                amineties: amineties,
                documents: documents,
                procedures: procedures,
                specialities: specialities

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


    const clincs2 = [

        {
            title: "Lab Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

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
            title: "Lab Admin Mobile",
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
            title: "Address",
            label: "address",
            type: "number",
            rows: 6,
            value: formik.values.address,
            touched: formik.touched.address,
            errors: formik.errors.address,
        },
        {
            title: "Longitude Latitude",
            label: "longitude_latitude",
            type: "number",
            rows: 4,
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

    //SEO
    const tabData2 = [

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


                            {clincs2.map((data, index) =>

                                <Grid key={index} lg={4}>

                                    <Box key={index} sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

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

                    </form>

                    <HCLTabHome

                        formik={formik}

                        image={image}
                        setImage={setImage}

                        tabData1={tabData1}
                        tabData2={tabData2}

                        amineties={amineties}
                        setAmenities={setAmenities}

                        payments={payments}
                        setPayments={setPayments}

                        documents={documents}
                        setDocuments={setDocuments}

                        procedures={procedures}
                        setProcedures={setProcedures}

                        specialities={specialities}
                        setSpecialities={setSpecialities}

                    />

                </Box>

            </Grid>

        </Grid >

    )
}