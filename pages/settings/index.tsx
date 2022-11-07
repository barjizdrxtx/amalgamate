import { Button, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'

function index() {

    const router = useRouter();

    const LogOut = () => {

        localStorage.removeItem('authToken');

        router.push('/')

        window.location.reload();

    }


    return (
        <Grid>
            <Box>
                <Button variant='contained' color='error' onClick={LogOut}>Log Out</Button>
            </Box>
        </Grid>
    )
}

export default index