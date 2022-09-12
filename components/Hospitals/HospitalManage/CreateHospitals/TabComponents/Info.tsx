import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

export const Info = (props: any) => {

    const { tabData1, formik } = props;

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {tabData1.map((data: any) =>

                <Grid lg={12}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                            <Typography>{data.title}</Typography>

                        </Box>

                        < TextField sx={{ flex: 4, width: "100%", mb: 2 }}
                            fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={data.rows}
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
    )
}
