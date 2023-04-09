import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { CustomizedButton } from '../Button/CustomizedButton'
import CheckCircleIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { useRouter } from 'next/router'

export const SavedPopup = (props: any) => {

    const { data, setAlertBox } = props;

    const router = useRouter();


    const onYes = () => {

        setAlertBox({ active: false, message: '', success: false })

        if (data.success)
            router.push(`/request/details/${data.id}`)

    }


    return (

        <Grid container justifyContent="center" alignItems="center" sx={{
            width: "100%", height: "100vh", zIndex: 200,
            position: "fixed", top: 0, left: 0, bgcolor: "rgba(0, 0, 0, 0.543)"
        }}>

            <Box sx={{
                bgcolor: "white", border: "1px solid black",
                // width: "100%", height: "100vh",
                display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "center", py: 3, px: 5, borderRadius: "10px"
            }}>

                {data.success ? <CheckCircleIcon sx={{ fontSize: "6rem", color: "green" }} /> :
                 <CloseIcon sx={{ fontSize: "6rem", color: "red" }} />
                } 

                <Typography variant='h5' fontWeight="bold" sx={{ m: 1 }}>{data.message}</Typography>


                <CustomizedButton onClick={onYes} bgcolor="dodgerblue" mx={1}>Continue</CustomizedButton>

            </Box>

        </Grid>

    )
}
