import React from 'react'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { SubSidebar } from './SubSidebar'
import { useRouter } from 'next/router'
import { Box, Divider } from '@mui/material'
import { useDarkmode } from '../../../hooks/useDarkmode'
import { subRoutes } from '../../../config/Routes/subRoutes';
import axios from 'axios'
import { BASE_URL } from '../../../utls/url'
import { Settings } from '@mui/icons-material'

export const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {


    axios.defaults.baseURL = BASE_URL;


    const router = useRouter();

    const darkmode = useDarkmode();



    return (

        <Box sx={{ width: "100%", display: "flex", backgroundColor: darkmode ? "#1B2631" : "white" }}>


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

                        {/* {subRoutes.filter(fil => fil.path === router.asPath).length > 0 && <SubSidebar />} */}

                        {router.asPath === '/' ? null : <SubSidebar />}

                    </Box>

                    <Box sx={{ width: "100%" }}>

                        {props.children}

                    </Box>

                </Box>


            </Box >

        </Box >
    )
}
