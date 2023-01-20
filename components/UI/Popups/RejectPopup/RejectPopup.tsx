import { Box, Grid, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { CustomizedButton } from '../../Button/CustomizedButton'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const RejectPopup = (props: any) => {

    const { setIsPopup } = props;

    return (

        <Grid container>

            <Box sx={{
                width: "100%", height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.3)", position: "absolute", top: 0, left: 0,
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            }}>

                <Box sx={{
                    backgroundColor: "white", display: "flex",
                    flexDirection: "column", width: "50%", height: "60vh", justifyContent: "center", alignItems: "center",
                    borderRadius: "10px", position: "relative"
                }}>


                    <IconButton sx={{ position: "absolute", top: "0", left: "0" }}>

                        <CancelOutlinedIcon sx={{ color: "red" }} onClick={() => setIsPopup(false)} />

                    </IconButton>


                    <TextField sx={{ width: "50%" }} multiline rows={6} />

                    <CustomizedButton width="50%" bgcolor="dodgerblue">Submit</CustomizedButton>

                </Box>


            </Box>

        </Grid>
    )
}
