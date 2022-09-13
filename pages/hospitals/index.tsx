import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { TabHome } from '../../components/Hospitals/TabHome'

const index = () => {

    //const router = useRouter();

    return (

        <Grid>

            <Box sx={{ m: 2 }}>

               <TabHome/>

            </Box>

        </Grid >
    )
}

export default index


