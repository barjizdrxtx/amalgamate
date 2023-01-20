import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { PRIMARY_COLOR } from '../../../utls/colors';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {

    const [menu, setMenu] = useState("100%");

    const router = useRouter();

    return (

        <Grid sx={{ p: 1 }} container justifyContent="center" alignItems="center">

            <Grid container lg={6} justifyContent="start">

                <MenuIcon onClick={() => setMenu(menu === "100%" ? "0" : "100%")}
                    sx={{ display: { xs: "flex", sm: "flex", lg: "none", xl: "none" }, fontSize: "2rem", position: "fixed", left: 0, ml: 1 }} />

                < Typography variant="h5" fontWeight="bold" sx={{ color: PRIMARY_COLOR }}>AMALGAMATE</Typography>

            </Grid>

            <Grid container  lg={6} justifyContent="end">

                <Box sx={{ bgcolor: "orange", display: "flex", borderRadius: "10px", cursor: "pointer" }} onClick={() => {

                    localStorage.removeItem("authToken")

                    router.push('/auth/login').then(() => router.reload())

                }}>

                    <Typography sx={{ m: 1, color: "black" }}>Logout</Typography>

                    <IconButton>

                        <LogoutIcon sx={{ color: "black" }} />

                    </IconButton>

                </Box>


            </Grid>



            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "100vh",
                bgcolor: "white", position: "fixed",
                top: 60, right: menu, zIndex: 100
            }}>

                <Typography fontWeight="bold"
                    onClick={() => {
                        router.push("/")
                        setMenu("100%")
                    }
                    } variant='h6' sx={{ m: 1 }}>Request</Typography>

                <Typography fontWeight="bold"
                    onClick={() => {
                        router.push("/request/create")
                        setMenu("100%")
                    }
                    } variant='h6' sx={{ m: 1 }}>Create Request</Typography>

            </Box>

        </Grid >

    )
}
