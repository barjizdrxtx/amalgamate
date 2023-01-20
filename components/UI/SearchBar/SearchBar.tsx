import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import React from 'react'

export const SearchBar = (props: any) => {

    const { setSearchResult } = props;

    return (

        <Grid>

            <TextField label="Search" onChange={(e: any) => setSearchResult(e.target.value)} />

        </Grid>

    )
}
