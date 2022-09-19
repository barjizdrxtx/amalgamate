import { Box, Grid, Typography } from '@mui/material';
import React from 'react'


export const Faq = (props: any) => {

    const { fetchedData } = props;

    return (

        <Grid container lg={12}>

        {fetchedData?.faq?.map((data: any) =>

            <Box>

                <Typography variant='h5'>{data.title}</Typography>

                <Typography>{data.description}</Typography>

            </Box>

        )}

    </Grid>
    )
}
