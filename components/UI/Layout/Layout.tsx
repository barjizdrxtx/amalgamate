import React from 'react'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { useRouter } from 'next/router'
import { Box, Divider } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../../../url'
import { PRIMARY_COLOR } from '../../../utls/colors'

export const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {


    axios.defaults.baseURL = BASE_URL;


    return (

        <Box sx={{ width: "100%", display: "flex", bgcolor: "white" }}>


            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>

                {/* <Box>

                    <NavBar />

                    <Divider />

                </Box> */}

                <Box sx={{ display: "flex" }} >

                    <Box sx={{
                        display: {
                            xs: "none", sm: "none",
                            md: "flex", lg: "flex", xl: "flex"
                        }
                    }}>

                        <Sidebar />

                    </Box>

                    <Box sx={{ width: "100%",  height: "92vh" }}>

                        {props.children}

                    </Box>

                </Box>


            </Box >

        </Box >
    )
}
