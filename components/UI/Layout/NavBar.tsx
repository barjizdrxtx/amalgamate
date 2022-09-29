import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Box, Button, Divider, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Image from "next/image"
import { useDispatch } from 'react-redux';
import { setDarkTheme, setThemeColor } from '../../../redux/featuresSlice';
import { useDarkmode } from '../../../hooks/useDarkmode';
import { PRIMARY_SHADOW } from '../../../utls/colors';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeColor } from '../../../hooks/useThemeColor';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { CustomizedButton } from '../Button/CustomizedButton';



export const NavBar = () => {

    const [primaryColor, setPrimaryColor]: any = useState([

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

    ])

    const dispatch = useDispatch();

    const darkmode = useDarkmode();

    const themecolor = useThemeColor();


    const [customize, setCustomize] = useState(false)

    const [tab, setTab] = useState(0);

    const [state, setState]: any = useState("#229954");

   


    const AddColor = () => {

        setPrimaryColor([...primaryColor, {
            id: 1,
            primary_color: state,
            secondary_color: "#EAFAF1"
        },])

    }


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

            <Box sx={{
                bgcolor: themecolor, cursor: "pointer", display: "flex", justifyContent: "center",
                alignItems: "center", width: "50px", height: "50px", borderRadius: "10px",
                boxShadow: PRIMARY_SHADOW
            }} onClick={() => setCustomize(!customize)}>

                <TuneIcon sx={{ color: "white" }} />

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



            {
                customize && <Box sx={{
                    position: "fixed", width: "14%", height: "100vh",
                    top: "0", right: "0", zIndex: 1,
                    display: "flex", alignItems: "start", px: 2,
                    flexDirection: "column",
                    ml: 2, cursor: "pointer", bgcolor: darkmode ? "black" : "white",
                    boxShadow: PRIMARY_SHADOW
                }}>

                    <Box sx={{
                        width: "100%", display: "flex", justifyContent: "space-between",
                        alignItems: "center", py: 2,
                    }}>

                        <Typography sx={{ fontWeight: "bold" }}>Customize</Typography>


                        <IconButton>

                            <CloseIcon sx={{ color: "gray" }} onClick={() => setCustomize(!customize)} />

                        </IconButton>


                    </Box>


                    <Divider />


                    <Typography sx={{ mt: 3 }}>Mode</Typography>


                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

                        <Box onClick={() => dispatch(setDarkTheme({ payload: false }))}

                            sx={{
                                boxShadow: PRIMARY_SHADOW,
                                backgroundColor: "white",
                                width: "100px", height: "60px",
                                display: "flex", justifyContent: "center", alignItems: "center",
                                p: 1.5, borderRadius: "10px", m: 1
                            }}>

                            <WbSunnyIcon sx={{ color: themecolor }} />

                        </Box>

                        <Box onClick={() => dispatch(setDarkTheme({ payload: true }))}

                            sx={{
                                boxShadow: PRIMARY_SHADOW,
                                backgroundColor: "black",
                                width: "100px", height: "60px",
                                display: "flex", justifyContent: "center", alignItems: "center",
                                p: 1.5, borderRadius: "10px", m: 1
                            }}>

                            <NightlightIcon sx={{ color: themecolor, transform: "rotate(-30deg)" }} />

                        </Box>

                    </Box>


                    <Typography sx={{ mt: 3 }}>Colors</Typography>



                    <Box sx={{ display: "flex" }}>

                        <Grid container lg={12}>

                            {primaryColor.map((data: any, index: any) =>

                                <Grid lg={4}>

                                    <Box onClick={() => {
                                        setTab(index)
                                        dispatch(setThemeColor({ payload: data.primary_color }))
                                    }} sx={{
                                        boxShadow: PRIMARY_SHADOW, width: "70px",
                                        height: "50px", p: 1.5, borderRadius: "10px", m: 1, display: "flex", justifyContent: "center",
                                        alignItems: "center", border: tab === index ? `2px solid ${data.primary_color}` : null
                                    }}>

                                        <Box sx={{ width: "50%", height: "100%", borderRadius: "100%", backgroundColor: data.primary_color }}>

                                        </Box>

                                    </Box>

                                </Grid>

                            )}

                        </Grid>

                    </Box>


                    <Typography sx={{ mt: 3 }}>Color Picker</Typography>


                    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <input style={{ width: "100%", height: "40px", cursor: "pointer" }} type="color" id="favcolor" name="favcolor" value={state} onChange={(e: any) => setState(e.target.value)} />

                        <CustomizedButton bgColor="dodgerblue" onClick={AddColor}>Submit</CustomizedButton>

                    </Box>



                    <Box sx={{
                        display: "flex", justifyContent: "center",
                        p: 1, mt: 3,
                        width: "100%", border: "1px solid lightgray"
                    }}>

                        <Typography>Full Screen</Typography>

                    </Box>


                </Box >

            }


        </Box >
    )
}
