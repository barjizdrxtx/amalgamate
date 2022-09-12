import { Box, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

export const Amenities = (props: any) => {

    const { tabData3, formik } = props;

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {tabData3.slice(0, 4).map((data: any) =>

                <Grid lg={12}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                            <Typography>{data.title}</Typography>

                        </Box>


                        <Checkbox />

                    </Box>

                </Grid>
            )}


            {tabData3.slice(4).map((data: any) =>

                <Grid lg={12}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

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
    )
}
