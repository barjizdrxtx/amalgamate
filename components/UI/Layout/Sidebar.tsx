import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { siderbar } from './helper';
import { useDarkmode } from '../../../hooks/useDarkmode';
import { GREY_COLOR, LIGHT_COLOR, LIGHT_GREY_COLOR } from '../../../utls/colors';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Sidebar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const darkmode = useDarkmode();

    const themecolor = useThemeColor();

    const [bool, setBool] = useState([]);


    const Expand = () => {

        setIsExpand(!isExpand)
    }

    return (

        <Box sx={{
            overflow: "hidden", width: 'fit-content',
            px: 1,
            backgroundColor: darkmode, borderRight: "1px solid #EAEDED"
        }}>

            <Box onClick={Expand} sx={{ cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", p: 2 }}>

                <KeyboardDoubleArrowLeftIcon
                    sx={{ color: themecolor, fontSize: "2rem", transform: isExpand ? "rotate(0deg)" : "rotate(180deg)" }} />

            </Box>

            <Divider />


            {siderbar.map((data: any, index: any) =>

                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", }}>

                    <Box onClick={() => {
                        router.push(data.path)
                    }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: data.path === router.asPath ? LIGHT_COLOR : "transparent",
                            px: 2, py: 1.2,
                            my: 0.5,
                            borderRadius: "10px",
                            '&:hover': {
                                backgroundColor: data.path === router.asPath ? "none" : LIGHT_GREY_COLOR,
                                transition: "0.3s",
                            },
                        }}>

                        <data.icon sx={{ color: data.path === router.asPath ? themecolor : GREY_COLOR, }} />


                        {isExpand &&

                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px",
                                        color: data.path === router.asPath ? themecolor : GREY_COLOR,
                                        fontWeight: data.path === router.asPath ? "bold" : "normal",

                                    }}>{data.name}</Typography>

                            </>}

                    </Box>

                </Box>

            )}

        </Box >

    )
}
