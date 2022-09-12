import React, { useState, useRef } from 'react'
import { Box, TextField, Grid, Button, Typography, Stack } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import ImageIcon from '@mui/icons-material/Image';
import { diseaseSchema } from './validation';
import { TextEditor } from '../TextEditor';
import { TabHome } from './TabHome';

// import { TextEditor } from '../TextEditor';

export const CreateDiseases = () => {

    const [image, setImage]: any = useState('')


    const [description, setDescription] = useState("");


    console.log("description", description)


    const [overview, setOverView]: any = useState([{ id: 1 }]);

    const [symptoms, setSymptoms]: any = useState([{ id: 1 }]);

    const [causes, setCauses]: any = useState([{ id: 1 }]);

    const [complications, setComplications]: any = useState([{ id: 1 }]);

    const [home_remadies, setHome_remadies]: any = useState([{ id: 1 }]);

    const [diet_and_nutrition, setDiet_and_nutrition]: any = useState([{ id: 1 }]);

    const [faq, setFaq]: any = useState([{ id: 1 }]);

    const router = useRouter();


    const AddImages = (event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            setImage(response.data.result.file_location)

        })
    }


    const handleChangeInput = (content: any) => {

        setDescription(content)

    }



    const formik = useFormik({

        initialValues: {

            name: '',
            description: '',


            faq_title: '',
            faq_description: '',

            meta_title: '',
            meta_tag_description: '',
            meta_tag_keyword: '',

        },

        validationSchema: diseaseSchema,

        onSubmit: (values: any) => {

            const axiosrequest1 = axios.post(`diseases`, {

                image_location: image,
                name: values.name,
                description: description,
                diet_and_nutrition: diet_and_nutrition,
                symptoms: symptoms,
                causes: causes,
                complications: complications,
                home_remadies: home_remadies,
                overview: overview,
                faq: faq,

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
                router.push('/diseases')
            }));

        },
    });


    const diseases = [

        {
            title: "Diseases Name",
            label: "name",
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name,
        },

    ]



    const tabData7 = [

        {
            title: "Faq",
            label: "faq_title",
            type: "text",
            rows: 1,
            value: formik.values.faq_title,
            touched: formik.touched.faq_title,
            errors: formik.errors.faq_title,
        },
        {
            title: "Faq-Description",
            label: "faq_description",
            type: "text",
            rows: 6,
            value: formik.values.faq_description,
            touched: formik.touched.faq_description,
            errors: formik.errors.faq_description,
        },
    ]

    const tabData8 = [

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

                    <Box sx={{
                        width: "100%", display: "flex",
                        justifyContent: "space-between", alignItems: "center",
                    }}>


                        <Box sx={{ width: "100%", display: "flex", m: 2 }}>

                            <Typography variant='h5' color="green" sx={{ fontWeight: "bold" }}>Add New Diseases</Typography>

                        </Box>


                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                            <CustomizedButton bgColor="#239B56" onClick={formik.handleSubmit}>Create Diseases</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push('/diseases')}>Cancel</CustomizedButton >

                        </Box>

                    </Box>


                    <form onSubmit={formik.handleSubmit}>

                        <Grid container lg={12}>

                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>


                                    {diseases.map((data, index) =>

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

                                                    {image === '' ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                                        :

                                                        <img src={image} width="100%" />

                                                    }

                                                </Box>

                                            </Box>

                                            <Box sx={{ display: "flex", width: "50%" }}>

                                                <Stack direction="row" alignItems="center" spacing={2}>

                                                    <Button variant="contained" component="label">
                                                        Upload

                                                        <input hidden type='file' key="image" id="outlined-basic"
                                                            onChange={(event) => AddImages(event)} />

                                                    </Button>

                                                </Stack>

                                            </Box>

                                        </Box>

                                    </Grid>



                                </Grid>

                            </Grid>


                            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                                <Grid lg={6}>

                                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                            <Typography>Description</Typography>

                                        </Box>

                                        <Box sx={{ mb: 1, flex: 2, display: "flex", justifyContent: "center" }}>

                                            <TextEditor onChange={handleChangeInput} />

                                        </Box>

                                    </Box>

                                </Grid>

                            </Grid>

                        </Grid>

                    </form>

                    <TabHome

                        formik={formik}

                        tabData7={tabData7}
                        tabData8={tabData8}

                        faq={faq}
                        setFaq={setFaq}

                        overview={overview}
                        setOverView={setOverView}

                        symptoms={symptoms}
                        setSymptoms={setSymptoms}

                        causes={causes}
                        setCauses={setCauses}

                        complications={complications}
                        setComplications={setComplications}

                        home_remadies={home_remadies}
                        setHome_remadies={setHome_remadies}

                        diet_and_nutrition={diet_and_nutrition}
                        setDiet_and_nutrition={setDiet_and_nutrition}


                    />

                </Box>

            </Grid>

        </Grid >


    )
}