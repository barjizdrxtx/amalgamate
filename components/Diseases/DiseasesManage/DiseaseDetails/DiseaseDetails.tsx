import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { TabHome } from './TabHome';
import { useQueryFetchId } from '../../../../hooks/useQueryFetch';


export const DiseaseDetails = () => {

    const router = useRouter();

    const { id } = router.query;

    const { fetchedData: fetchedData } = useQueryFetchId('diseases', id)


    return (
        <Grid container justifyContent="center" md={12}>

            <Grid container justifyContent="center" md={9}>

                <Box>

                    <Typography variant='h5' fontWeight="bold" sx={{ backgroundColor: "#7DCEA0", p: 1, color: "white" }}>{fetchedData?.name}</Typography>

                    <TabHome fetchedData={fetchedData} />

                </Box>

            </Grid >

        </Grid >
    )
}

