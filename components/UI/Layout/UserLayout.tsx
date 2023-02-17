import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useQueryFetchId } from '../../../hooks/useQueryFetch'
import { SearchBar } from '../SearchBar/SearchBar'

export const UserLayout = () => {

const [searchResult,setSearchResult]=useState();


    const {fetchedData:fetchedData}=useQueryFetchId("request",searchResult)

 const client = fetchedData?.result

  return (
    
    <Grid container>

<SearchBar setSearchResult={setSearchResult}/>

<Grid container justifyContent="space-around">

     
 <Typography>{client?.customer_name}</Typography>
 

 <Typography>{client?.customer_name}</Typography>
 

 <Typography>{client?.customer_name}</Typography>
 


 <Typography>{client?.customer_name}</Typography>
 


 <Typography>{client?.customer_name}</Typography>
 






</Grid>



    </Grid>

  )
}
