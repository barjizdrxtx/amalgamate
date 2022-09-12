import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { TabHome } from '../../components/Diseases/TabHome';


const index = () => {

    const router = useRouter();

    return (

        <Grid>

            <TabHome />

        </Grid >
    )
}

export default index


