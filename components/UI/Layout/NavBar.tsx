import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { PRIMARY_COLOR } from '../../../utls/colors';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedIcon from '@mui/icons-material/Feed';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { AlertBox } from '../AlertBox/AlertBox';


export const NavBar = () => {

    const [alertBox, setAlertBox] = useState(false)

    const router = useRouter();

    const onLogout = () => {

        localStorage.removeItem("authToken")

        router.push('/auth/login').then(() => router.reload())

    }

    return (

        <Grid>

            {alertBox === true ? <AlertBox title="Are You Sure Logout ?"
                onYes={onLogout} setAlertBox={setAlertBox} /> : null}

            <Grid sx={{ display: { xs: 'flex', md: 'none' } }}>

                <MobileNavBar alertBox={alertBox} setAlertBox={setAlertBox} />

            </Grid>


            <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>

                <DeskTopNavBar alertBox={alertBox} setAlertBox={setAlertBox} />

            </Grid>


        </Grid>


    )
}



export const DeskTopNavBar = (props: any) => {


    const { alertBox, setAlertBox } = props;

    console.log("alertBox", alertBox)


    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: "white" }}>


            <Grid container justifyContent="start" alignItems="center"
                xs={6} lg={6}>

                <Box sx={{
                    mx: 1,
                    width: "50px", height: "50px", borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center", p: 1,
                    alignItems: "center", bgcolor: "dodgerblue",
                }}>

                    <img width="100%" src="https://www.amalgamatetechnologies.com/images/logo.png" alt="" />

                </Box>

                <Typography sx={{ color: PRIMARY_COLOR }} variant="h5" fontWeight="bold">AMALGAMATE</Typography>

            </Grid>


            <Grid container xs={6} lg={6} justifyContent="end">

                <Logout alertBox={alertBox} setAlertBox={setAlertBox} />

            </Grid>

        </Grid >

    )
}


const MobileNavBar = (props: any) => {

    const { alertBox, setAlertBox } = props;

    const router = useRouter();

    const [menu, setMenu] = useState("100%");

    const mobileNavBar = [

        {
            name: 'Search',
            icon: FeedIcon,
            path: '/'
        },
        {
            name: 'Registration',
            icon: CreateNewFolderIcon,
            path: '/request/create'
        },

    ]


    return (

        <Grid container sx={{ bgcolor: "white", position: "fixed", zIndex: 110, top: 0, left: 0 }}>

            <Grid container justifyContent="center" alignItems="center">

                <MenuIcon onClick={() => setMenu(menu === "100%" ? "0%" : "100%")}

                    sx={{ fontSize: "2rem", position: "absolute", left: 0, ml: 1 }} />

                <Box sx={{
                    m: 1,
                    width: "50px", height: "50px", borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center", p: 1,
                    alignItems: "center", bgcolor: "dodgerblue",
                }}>

                    <img width="100%" src="https://www.amalgamatetechnologies.com/images/logo.png" alt="" />

                </Box>

                <Typography sx={{ color: PRIMARY_COLOR }} variant="h5" fontWeight="bold">AMALGAMATE</Typography>


            </Grid>


            <Grid sx={{
                position: "absolute", top: 60, left: menu, zIndex: 10,
                bgcolor: "white", width: "100%", height: "100vh"
            }}>


                {mobileNavBar.map((data: any, index: any) =>

                    <Typography key={index} fontWeight="bold"
                        onClick={() => {
                            router.push(data.path)
                            setMenu("100%")
                        }
                        } variant='h6' sx={{ mx: 1, my: 3 }}>{data.name}</Typography>

                )}


                <Logout alertBox={alertBox} setAlertBox={setAlertBox} />


            </Grid>

        </Grid >

    )

}



const Logout = (props: any) => {

    const { setAlertBox } = props;

    return (

        <Box sx={{
            m: 1, width: "fit-content", bgcolor: "orange", display: "flex",
            borderRadius: "10px", cursor: "pointer"
        }} onClick={() => {
            setAlertBox(true)
        }}>

            <Typography sx={{ m: 1, color: "black" }}>Logout</Typography>

            <IconButton>

                <LogoutIcon sx={{ color: "black" }} />

            </IconButton>

        </Box>

    )
}
