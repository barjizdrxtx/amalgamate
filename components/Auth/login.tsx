import { Box, Typography, Grid, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BASE_URL } from '../../url';
import { CustomizedButton } from '../UI/Button/CustomizedButton'
import { PasswordInput } from '../UI/PasswordInput/PasswordInput';
import { loginSchemea } from './validation';

export const Login = () => {


    const router = useRouter();


    const formik = useFormik({

        initialValues: {

            username: '',
            password: '',
        },

        validationSchema: loginSchemea,

        onSubmit: (values: any) => {

            axios.post(`${BASE_URL}auth/login`,

                {
                    username: values.username,
                    password: values.password,
                    // role: "user",
                    // is_active: true

                },

            ).then((response: any) => {


                if (response.data.success) {

                    localStorage.setItem('authToken', response.data.accessTocken)

                    router.push('/').then(() => router.reload())

                }

                else {


                    alert("please check your username or password")


                }
            })

        },
    });


    return (


        <Grid container justifyContent="center" alignItems="center"
            sx={{ bgcolor: "white", height: "100vh" }} >

            <Grid container lg={10} justifyContent="center" alignItems="center">

                <Grid xs={12} lg={6} >

                    <img width="100%" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" />

                </Grid>


                <Grid container xs={11.5} lg={6} justifyContent="center">

                    <Grid xs={12} lg={11}>

                        <Box sx={{ mb: 3 }}>

                            <Typography sx={{
                                color: "#566573", fontWeight: "bold",
                                fontSize: { xs: "2rem", md: "2.3rem", lg: "2.5rem" }
                            }}>Login to Amalgamate</Typography>

                        </Box>

                        <Box sx={{ mb: 0.5 }}>

                            <Typography sx={{ color: "#566573", fontWeight: "bold" }}>User Name</Typography>

                        </Box>

                        < TextField sx={{ width: "100%", mb: 2 }}
                            fullWidth
                            id='username'
                            name='username'
                            value={formik.values.username}
                            type='text'
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}

                        />

                        <PasswordInput formik={formik} />

                        <Box sx={{ my: 2 }}>

                            <CustomizedButton width="100%" bgColor="black" onClick={formik.handleSubmit}>Login</CustomizedButton>

                        </Box>

                    </Grid>

                </Grid >

            </Grid >

        </Grid >

    )
}

