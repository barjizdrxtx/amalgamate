import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Box, IconButton, OutlinedInput, TextField, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Image from "next/image"
import { ToggleMui } from '../ToggleMui/ToggleMui';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme } from '../../../redux/featuresSlice';
import { useDarkmode } from '../../../utils/useDarkmode';


export const NavBar = () => {

    const dispatch = useDispatch();

    const darkmode = useDarkmode();

    return (


        <Box sx={{
            display: "flex",
            justifyContent: "space-between", alignItems: "center",
            backgroundColor: darkmode ? "#17202A" : "white"
        }}>

            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", ml: 1 }}>

                <Image src="/assets/logo/logo.png" width="120px" height="40px" />

                <Typography variant="h5" fontWeight="bold" sx={{ color: "#229954", p: 2 }}>CMS</Typography>

            </Box>

            <Box>

                <OutlinedInput placeholder="Search" />


            </Box>
            {/* 
            <ToggleMui label={undefined} onClick={() => dispatch(setDarkTheme())} />  */}


            <Box sx={{ display: "flex" }}>

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


                <Box sx={{ display: "flex", alignItems: "center", ml: 2, cursor: "pointer" }}>

                    {/* <Image src="/assets/profile/avatar.png" width="40px" height="40px" style={{ borderRadius: "100%", margin: "10px" }} />

                    <Typography sx={{ ml: 1, mr: 2 }}>Barjiz</Typography>

                    <KeyboardArrowDownIcon sx={{ mr: 1 }} /> */}

                </Box>



            </Box>



        </Box >
    )
}
