import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { CustomizedButton } from '../UI/Button/CustomizedButton'
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

            axios.post(`http://192.168.1.27:3000/auth/login`,

                {
                    username: values.username,
                    password: values.password,

                },

            ).then((response: any) => {


                if (response.data.success) {

                    localStorage.setItem('authToken', response.data.accessTocken)

                    router.push("/")

                    window.location.reload();

                }

                else {


                    alert("please check your username or password")


                }
            })

        },
    });


    return (


        <Grid container alignItems="center" >

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", p: 1 }}>


                <Grid lg={6} >


                    <img width="100%" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" />


                </Grid>


                <Grid lg={6}>


                    < TextField sx={{ width: "100%", mb: 2 }}
                        fullWidth
                        id='username'
                        name='username'
                        label='username'
                        value={formik.values.username}
                        type='text'
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}

                    />


                    < TextField sx={{ width: "100%", mb: 2 }}
                        fullWidth
                        id='password'
                        name='password'
                        label='password'
                        value={formik.values.password}
                        type='password'
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <CustomizedButton width="100%" bgColor="dodgerblue" onClick={formik.handleSubmit}>Login</CustomizedButton>

                </Grid>

            </Box>

        </Grid >

    )
}

