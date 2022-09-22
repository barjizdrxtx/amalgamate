import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { HospitalDoctors } from '../../../components/HcDoctors/HospitalDoctors';


const index = () => {

    const router = useRouter();

    return (

        <Grid>

            <Box sx={{ m: 2 }}>

                <HospitalDoctors />

            </Box>

        </Grid >
    )
}

export default index


