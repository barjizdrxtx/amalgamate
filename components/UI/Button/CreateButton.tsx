import { Button, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { CustomizedButton } from './CustomizedButton'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { PRIMARY_COLOR } from '../../../utls/colors'

export const CreateButton = (props: any) => {

    const { buttonName, title, onCreate, preview, isPreview, setPreview } = props;

    const router = useRouter();

    return (

        <Grid container>

            <Grid container sm={6} md={6} lg={6}
                sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } }}>

                <Typography variant='h5' color={PRIMARY_COLOR} sx={{ fontWeight: "bold", m: 1 }}>{buttonName} {title}</Typography>

            </Grid>

            <Grid container sm={6} md={6} lg={6}>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>

                    <CustomizedButton bgColor={PRIMARY_COLOR} onClick={onCreate}>{buttonName + " " + title}</CustomizedButton >

                    <Box sx={{ m: 1 }}></Box>

                    <CustomizedButton bgColor="black" onClick={() => router.push(`/`)}>Cancel</CustomizedButton >

                </Box>


            </Grid>

            <Divider />

        </Grid >
    )
}
