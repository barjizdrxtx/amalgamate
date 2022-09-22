import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { ClinicsDoctors } from '../../../components/HcDoctors/ClinicsDoctors';

const index = () => {

    const router = useRouter();

    return (

        <Grid>
            
            <Box sx={{ m: 2 }}>

                <ClinicsDoctors />

            </Box>

        </Grid >
    )
}

export default index


