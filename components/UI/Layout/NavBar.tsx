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


export const NavBar = () => {

    const [menu, setMenu] = useState("100%");

    const router = useRouter();

    const mobileNavBar = [

        {
            name: 'Request',
            icon: FeedIcon,
            path: '/'
        },
        {
            name: 'Create Request',
            icon: CreateNewFolderIcon,
            path: '/request/create'
        },

    ]

    return (

        <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: "white" }}>

            <Grid container xs={6} lg={6} sx={{ py: 1, justifyContent: { xs: "center", lg: "center" } }} >

                <MenuIcon onClick={() => setMenu(menu === "100%" ? "0" : "100%")}
                    sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }, fontSize: "2rem", position: "fixed", left: 0, ml: 1 }} />

                <Typography variant="h5" fontWeight="bold" sx={{ color: PRIMARY_COLOR }}>AMALGAMATE</Typography>

            </Grid>


            <Grid container sx={{ display: { xs: "none", md: "flex" } }} xs={6} lg={6} justifyContent="end">

                <Logout />

            </Grid>



            <Box sx={{
                display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
                flexDirection: "column", justifyContent: "start",
                transition: "0.5s",
                width: "100%", height: "100vh",
                bgcolor: "white", position: "fixed",
                top: 57, right: menu, zIndex: 100
            }}>


                {mobileNavBar.map(data =>

                    <Typography fontWeight="bold"
                        onClick={() => {
                            router.push(data.path)
                            setMenu("100%")
                        }
                        } variant='h6' sx={{ m: 1 }}>{data.name}</Typography>

                )}


                <Logout />


            </Box>

        </Grid >

    )
}




const Logout = () => {

    const router = useRouter();

    return (

        <Box sx={{ m: 1, width: "fit-content", bgcolor: "orange", display: "flex", borderRadius: "10px", cursor: "pointer" }} onClick={() => {

            localStorage.removeItem("authToken")

            router.push('/auth/login').then(() => router.reload())

        }}>

            <Typography sx={{ m: 1, color: "black" }}>Logout</Typography>

            <IconButton>

                <LogoutIcon sx={{ color: "black" }} />

            </IconButton>

        </Box>

    )
}
