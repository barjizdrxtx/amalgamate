import { Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/system';
import { HCLTabHome } from '../../../MainTab/HCLTabHome';
import { CreateButton } from '../../../UI/Button/CreateButton';
import { useQueryFetchId } from '../../../../hooks/useQueryFetch';


export const EditClinics = ({ path = 'clinics' }) => {

    const router = useRouter();

    const [documents, setDocuments] = useState();

    const [procedures, setProcedures] = useState();


    const [alternate_mobile_numbers, setAlternate_mobile_numbers] = useState();


    const { id } = router.query;


    const { fetchedData: fetchedData } = useQueryFetchId('clinics', id)

    const clinics = fetchedData?.result;



    const [specialities, setSpecialities] = useState();

    const [image, setImage] = useState();


    useEffect(() => {

        setDocuments(clinics?.documents)

        setProcedures(clinics?.procedures)

        setAlternate_mobile_numbers(clinics?.alternate_mobile_numbers)

        setSpecialities(clinics?.specialities)

        setImage(clinics?.images)

    }, [])


    const [days, setDays]: any = useState([

        {
            day: "Monday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 1,
        },
        {
            day: "TuesDay",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 2,
        },
        {
            day: "Wednesday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 3,
        },

        {
            day: "Thursday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 4,
        },
        {
            day: "Friday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 5,
        },
        {
            day: "Saturday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 6,
        },

        {
            day: "Sunday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm",
            day_id: 7,
        },

    ]);

    const [amineties, setAmenities] = useState(clinics?.amineties);

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
            name: clinics?.name,
            profile: clinics?.profile,
            website: clinics?.website,
            clinic_admin_name: clinics?.clinic_admin_name,
            clinic_admin_mobile: clinics?.clinic_admin_mobile,
            longitude_latitude: clinics?.longitude_latitude,
            clinic_contact_no: clinics?.clinic_contact_no,
            clinic_email: clinics?.clinic_email,
            clinic_reg_no: clinics?.clinic_reg_no,
            description: clinics?.description,
            location: clinics?.location,
            address: clinics?.address,
            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',
        },

        enableReinitialize: true,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.patch(`${path}/${id}`, {

                name: values.name,
                profile: values.profile,
                website: values.website,
                clinic_admin_name: values.clinic_admin_name,
                clinic_admin_mobile: values.clinic_admin_mobile,
                address: values.address,
                location: values.location,
                latitude_longitude: "string",
                clinic_contact_no: values.clinic_contact_no,
                clinic_email: values.clinic_email,
                clinic_reg_no: values.clinic_reg_no,
                documents: documents,
                description: values.description,
                images: image,
                remarks: "string",
                active: true,
                procedures: procedures,
                amineties: amineties,
                specialities: specialities,
                payment_modes: payments,
                timings: days,

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



    const clincs2 = [

        {
            title: "Clinic Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

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


                    <CreateButton buttonName="Edit" title={path}
                        onCreate={formik.handleSubmit}
                    />

                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


                            {clincs2.map((data, index) =>

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
                                        // helperText={data.touched && data.errors}
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

                        days={days}
                        setDays={setDays}

                        tabData1={tabData1}
                        tabData2={tabData2}

                        amineties={amineties}
                        setAmenities={setAmenities}

                        payments={payments}
                        setPayments={setPayments}

                        documents={documents}
                        setDocuments={setDocuments}

                        alternate_mobile_numbers={alternate_mobile_numbers}
                        setAlternate_mobile_numbers={setAlternate_mobile_numbers}

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