import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const TextFieldUI = (props: any) => {

    const { onChange, title, type } = props;

    return (

        <Grid lg={3}>

            <Box sx={{ m: 2 }}>

                <Typography sx={{ width: "100%", mb: 1 }}>{title}</Typography>

                <TextField sx={{ width: "100%" }} type={type} id="outlined-basic" key="full_name" variant="outlined" onChange={onChange} />

            </Box>

        </Grid>

    )
}
