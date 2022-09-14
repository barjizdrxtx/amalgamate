import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { Doctors } from '../../../components/Clinics/ClinicsManage/Doctors/Doctors';


const index = () => {

    const router = useRouter();

    return (

        <Grid>
            
            <Box sx={{ m: 2 }}>

                <Doctors />

            </Box>

        </Grid >
    )
}

export default index


