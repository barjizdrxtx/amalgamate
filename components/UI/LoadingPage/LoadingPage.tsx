import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { PRIMARY_COLOR } from '../../../utls/colors'
import style from "../../../styles/LoadingPage.module.css"

export const LoadingPage = () => {

    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>


            {[1, 2, 3, 4, 5].map((data:any,index:any) =>

                <Box key={index} className={style.load_anim} sx={{

                    width: "40px", height: "40px",
                    bgcolor: PRIMARY_COLOR, m: 1, borderRadius: "100%"
                }}></Box>

            )}

        </Grid >

    )
}
