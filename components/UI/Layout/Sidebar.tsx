import { Box, } from '@mui/material'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { mainRoutes } from '../../../config/Routes/mainRoutes';
import { useDarkmode } from '../../../hooks/useDarkmode';
import { subRoutes } from '../../../config/Routes/subRoutes';
import { GREY_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../../../utls/colors';

export const Sidebar = () => {


    const router = useRouter();

    const darkmode = useDarkmode();


    return (

        <Box sx={{
            backgroundColor: darkmode ? "#17202A" : "white",
            display: "flex",
            height: "100vh",
            flexDirection: "column", justifyContent: "space-between", alignItems: "center",
            borderRight: "1px solid #EAEDED", px: 1
        }}>

            <Image onClick={() => router.push('/auth/login')} src="/assets/profile/avatar.png" width="40px" height="40px"
                style={{ borderRadius: "100%", margin: "10px", cursor: "pointer" }} />

            <Box>

                {mainRoutes.map((data, index) =>

                    <Box key={index} sx={{
                        display: "flex",
                        flexDirection: "row", justifyContent: "center", alignItems: "center",
                        p: 1.5, cursor: "pointer", color: GREY_COLOR, transition: '0.5s',
                        mb: 1,
                        backgroundColor: index === 1 ? subRoutes.filter(fil => fil.path === router.asPath).length > 0 ? LIGHT_COLOR : 'transparent'
                            : router.asPath === data.path ? LIGHT_COLOR : ""
                        , borderRadius: "10px"

                    }}
                        onClick={() => {
                            router.push(data.path)
                        }}>

                        <data.icon sx={{
                            color: index === 1 ? subRoutes.filter(fil => fil.path === router.asPath).length > 0 ? PRIMARY_COLOR : GREY_COLOR
                                : router.asPath === data.path ? PRIMARY_COLOR : GREY_COLOR
                            ,
                            '&:hover': { color: PRIMARY_COLOR }
                        }} />

                    </Box>

                )}
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row", justifyContent: "center", alignItems: "center",
                p: 1.5, cursor: "pointer", color: "white", transition: '0.5s', '&:hover': {
                    borderRadius: "10px",
                },
                mb: 1,
                backgroundColor: router.asPath === '/settings' ? LIGHT_COLOR : 'transparent', borderRadius: "10px"

            }}
                onClick={() => router.push('/settings')}>
                <SettingsIcon sx={{
                    color: router.asPath === "/settings" ? PRIMARY_COLOR : GREY_COLOR,
                    '&:hover': { color: router.asPath === "/settings" ? PRIMARY_COLOR : PRIMARY_COLOR }
                }} />


            </Box>

        </Box >
    )
}
