import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import { FileUpload } from '../../UI/FileUpload/FileUpload';


export const PersonalDetails = (props: any) => {

    const { list, formik, file_upload, setFileUpload,

    } = props;

    
    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12}>

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

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

                    <Grid container lg={4}>

                        <FileUpload file_upload={file_upload} setFileUpload={setFileUpload} />

                    </Grid>

                </Grid>

            </form>


        </Grid >

    )
}