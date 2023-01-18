import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { RequestDetails } from '../../../components/Request/RequestDetails';

const index = () => {

  const router = useRouter();

  return (

    <Grid>


      <Box sx={{ m: 2 }}>

        <RequestDetails />

      </Box>

    </Grid >
  )
}

export default index

