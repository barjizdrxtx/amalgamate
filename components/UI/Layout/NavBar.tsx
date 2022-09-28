import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Box, Divider, Grid, IconButton, OutlinedInput, TextField, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Image from "next/image"
import { ToggleMui } from '../ToggleMui/ToggleMui';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setThemeColor } from '../../../redux/featuresSlice';
import { useDarkmode } from '../../../hooks/useDarkmode';
import { PRIMARY_COLOR } from '../../../utls/colors';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeColor } from '../../../hooks/useThemeColor';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';

const primaryColor = [

    {
        id: 1,
        primary_color: "#229954",
        secondary_color: "#EAFAF1"
    },

    {
        id: 2,
        primary_color: "dodgerblue",
        secondary_color: "#EAFAF1"
    },

    {
        id: 3,
        primary_color: "#FF6347	",
        secondary_color: "#EAFAF1"
    },

    {
        id: 4,
        primary_color: "#6A5ACD",
        secondary_color: "#EAFAF1"
    },
    {
        id: 5,
        primary_color: "#2F4F4F	",
        secondary_color: "#EAFAF1"
    },

    {
        id: 6,
        primary_color: "#800080	",
        secondary_color: "#EAFAF1"
    },

]

export const NavBar = () => {

    const dispatch = useDispatch();

    const darkmode = useDarkmode();

    const themecolor = useThemeColor();

    console.log("themecolor", themecolor)

    const [customize, setCustomize] = useState(false)


    return (


        <Box sx={{
            display: "flex",
            justifyContent: "space-between", alignItems: "center",
            backgroundColor: darkmode ? "#17202A" : "white"
        }}>

            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", ml: 1 }}>

                <Image src="/assets/logo/logo.png" width="120px" height="40px" />

                <Typography variant="h5" fontWeight="bold" sx={{ color: themecolor, p: 2 }}>CMS</Typography>

            </Box>

            <Box>

                <OutlinedInput placeholder="Search" />

            </Box>

            <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px", borderRadius: "10px", backgroundColor: "white", boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px" }} onClick={() => setCustomize(!customize)}>

                <TuneIcon sx={{ color: "grey" }} />

            </Box>



            <Box sx={{ display: "flex", width: "10%", alignItems: "center" }}>


                <IconButton>

                    <Badge badgeContent={1} color="primary">
                        <QuestionAnswerIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>


                <IconButton>

                    <Badge badgeContent={99} color="primary">
                        <EmailIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>


                <IconButton>

                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon sx={{ color: "gray" }} />
                    </Badge>

                </IconButton>

            </Box>



            {customize && <Box sx={{
                position: "fixed", width: "17%", height: "100vh",
                top: "0", right: "0", zIndex: 1,
                display: "flex", alignItems: "center",
                flexDirection: "column",
                ml: 2, cursor: "pointer", backgroundColor: darkmode ? "black" : "#FAFAFA",
                boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
            }}>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", p: 2 }}>

                    <Typography sx={{ fontWeight: "bold" }}>Customize</Typography>

                    <CloseIcon sx={{ color: "gray" }} onClick={() => setCustomize(!customize)} />

                </Box>


                <Divider />


                <Box sx={{ display: "flex" }}>

                    <Box onClick={() => dispatch(setDarkTheme({ payload: false }))}

                        sx={{
                            backgroundColor: "white",
                            width: "100px", height: "60px",
                            display: "flex", justifyContent: "center", alignItems: "center",
                            border: "1px solid gray", p: 1.5, borderRadius: "10px", m: 1
                        }}>

                        <WbSunnyIcon sx={{ color: themecolor }} />

                    </Box>

                    <Box onClick={() => dispatch(setDarkTheme({ payload: true }))}

                        sx={{
                            backgroundColor: "black",
                            width: "100px", height: "60px",
                            display: "flex", justifyContent: "center", alignItems: "center",
                            border: "1px solid gray", p: 1.5, borderRadius: "10px", m: 1
                        }}>

                        <NightlightIcon sx={{ color: themecolor, transform: "rotate(-30deg)" }} />

                    </Box>

                </Box>


                <Box sx={{ display: "flex" }}>

                    <Grid container lg={12}>

                        {primaryColor.map(data =>

                            <Grid lg={4}>

                                <Box onClick={() => dispatch(setThemeColor({ payload: data.primary_color }))} sx={{ width: "80px", height: "40px", border: "1px solid gray", p: 1.5, borderRadius: "10px", m: 1 }}>

                                    <Box sx={{ width: "100%", height: "100%", borderRadius: "100%", backgroundColor: data.primary_color }}>

                                    </Box>

                                </Box>

                            </Grid>

                        )}

                    </Grid>

                </Box>


            </Box>

            }


        </Box >
    )
}
