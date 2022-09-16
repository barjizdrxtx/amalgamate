import { Box, Grid, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { CustomizedButton } from '../UI/Button/CustomizedButton'
import { loginSchemea } from './validation';

export const Login = () => {


    const formik = useFormik({

        initialValues: {

            username: '',
            password: '',

        },

        validationSchema: loginSchemea,

        onSubmit: (values: any) => {

            axios.post(`auth/login`,

                {
                    username: values.username,
                    password: values.password,
                    mode: 'user'

                },

            ).then((response: any) => {


                if (response.data.success) {

                    localStorage.setItem('authToken', response.data.access_token)

                    window.location.reload();

                }

                else {

                    console.log("response", response)

                    alert("please check your username or password")



                }






            })

        },
    });


    return (


        <Grid container alignItems="center" >

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>


                <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>


                    <img width="100%" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" />


                </Box>


                <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>


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

                    <CustomizedButton bgColor="dodgerblue" onClick={formik.handleSubmit}>Login</CustomizedButton>

                </Box>

            </Box>

        </Grid>

    )
}

