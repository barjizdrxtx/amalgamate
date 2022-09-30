import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

export const Seo = (props: any) => {

    const { tabList, formik } = props;

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {tabList.map((data: any, index: any) =>

                <Grid key={index} lg={12}>

                    <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                            <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

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
