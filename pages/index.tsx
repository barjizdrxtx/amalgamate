import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { Request } from '../components/Request/Request';


const index = () => {


    return (

        <Grid>

          
            <Box sx={{ m: 2 }}>

                <Request />

            </Box>

        </Grid >
    )
}

export default index


