import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useQueryFetchId } from '../../../hooks/useQueryFetch'
import { RequestDetails } from '../../Request/RequestDetails'
import { RequestDetails2 } from '../../Request/RequestDetails2'
import { SearchBar } from '../SearchBar/SearchBar'

export const UserLayout = () => {

  const [id, setSearchResult] = useState('');

  console.log("id", id)

  return (

    <Grid container justifyContent="center" alignItems="center">

      <Grid sx={{ mt: { xs: 10, lg: 2 } }}>

        <SearchBar setSearchResult={setSearchResult} />

      </Grid>


      <RequestDetails2 id={id} setSearchResult={setSearchResult} />

    </Grid>

  )
}
