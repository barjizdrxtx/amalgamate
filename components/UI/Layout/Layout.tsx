import React from 'react'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { SubSidebar } from './SubSidebar'
import { useRouter } from 'next/router'
import { Box, Divider } from '@mui/material'
import { useDarkmode } from '../../../hooks/useDarkmode'
import axios from 'axios'
import { BASE_URL } from '../../../url'

export const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {


    axios.defaults.baseURL = BASE_URL;


    const router = useRouter();

    const darkmode = useDarkmode();



    return (

        <Box sx={{ width: "100%", display: "flex", backgroundColor: darkmode }}>


            <Box sx={{ width: "fit-content" }}>

                <Sidebar />

            </Box>


            <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>

                <Box>

                    <NavBar />

                    <Divider />

                </Box>

                <Box sx={{ display: "flex" }} >

                    <Box>

                        {router.asPath === '/' ? null : <SubSidebar />}

                    </Box>

                    <Box sx={{ width: "100%", overflowY: "scroll", height: "92vh" }}>

                        {props.children}

                    </Box>

                </Box>


            </Box >

        </Box >
    )
}
