import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { FileUpload } from '../../UI/FileUpload/FileUpload';
import { DropDown } from '../../UI/DropDown/DropDown';


export const PersonalDetails = (props: any) => {

    const { serverType, setServerType, list, formik, file_upload, setFileUpload,

    } = props;

    const dropData = [

        { name: "vpn" },
        { name: "onpremises" },
        { name: "cloud" },
        { name: "DynDns" }
    ]



    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12}>

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

                            <Grid sx={{ m: 1 }}>

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                                < TextField sx={{ width: "100%", my: 1 }}
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

                            </Grid>

                        </Grid>
                    )}

                    <Grid container xs={12} sm={6} lg={4}>

                        <DropDown text="Server type" value={serverType} setValue={setServerType} dropData={dropData} id="name" name="name" />

                    </Grid>

                </Grid>

                <Grid container lg={4}>

                    <FileUpload file_upload={file_upload} setFileUpload={setFileUpload} />

                </Grid>

            </form>

        </Grid >

    )
}