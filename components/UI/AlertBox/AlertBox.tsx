import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { CustomizedButton } from '../Button/CustomizedButton'

export const AlertBox = (props: any) => {

    const { onYes, setAlertBox, title } = props;

    const onNo = () => {

        setAlertBox(false)

        // alert("hello")

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

                <Typography>{title}</Typography>

                <Grid>

                    <CustomizedButton onClick={onYes} bgcolor="red" mx={1}>Yes</CustomizedButton>

                    <CustomizedButton onClick={onNo} bgcolor="black" mx={1}>No</CustomizedButton>

                </Grid>

            </Box>

        </Grid>

    )
}
