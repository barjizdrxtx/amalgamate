import { Box, Grid, Typography } from '@mui/material';
import React from 'react'


export const Faq = (props: any) => {

    const { fetchedData } = props;

    console.log("faq", fetchedData)

    return (

        <Grid container lg={12}>

            <Typography variant="h4" fontWeight="bold" sx={{ m: 1 }}>Faq</Typography>

            {fetchedData?.map((data: any) =>

                <Box sx={{ mb: 2 }}>

                    <Typography sx={{ backgroundColor: "lightgray", p: 1, m: 1 }} variant='h6' fontWeight="bold">{data.title}</Typography>

                    <Typography variant="h6" sx={{ m: 1 }}>{data.description}</Typography>

                </Box>

            )}

        </Grid>
    )
}
