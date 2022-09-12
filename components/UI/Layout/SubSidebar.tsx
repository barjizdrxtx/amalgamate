import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { subRoutes } from '../../../config/Routes/subRoutes';
import { useDarkmode } from '../../../utils/useDarkmode';

export const SubSidebar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const darkmode = useDarkmode();


    const Expand = () => {

        setIsExpand(!isExpand)
    }


    return (

        <Box sx={{
            overflow: "hidden", width: 'fit-content',
            height: "70vh",
            px: 1,
            backgroundColor: darkmode ? "#17202A" : "white", borderRight: "1px solid #EAEDED"
        }}>

            <Box onClick={Expand} sx={{ cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", p: 2 }}>

                {isExpand ?
                    <KeyboardDoubleArrowLeftIcon sx={{ color: "#229954", fontSize: "2rem" }} />
                    :
                    <KeyboardDoubleArrowRightIcon sx={{ color: "#229954", fontSize: "2rem" }} />
                }

            </Box>

            <Divider />



            {subRoutes.map((data, index) =>

                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", }}>

                    <Box onClick={() => router.push(data.path)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: router.asPath === data.path ? "#EAFAF1" : "transparent",
                            px: 2, py: 1.2,
                            m: 0.5,
                            borderRadius: "10px",
                            '&:hover': {
                                backgroundColor: router.asPath === data.path ? "none" : "#F2F3F4",
                                transition: "0.3s",
                            },
                        }}>

                        <data.icon sx={{ color: router.asPath === data.path ? "#229954" : "#566573", }} />

                        {isExpand &&
                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px",
                                        color: router.asPath === data.path ? "#229954" : "#566573",
                                        fontWeight: router.asPath === data.path ? "bold" : "normal",

                                    }}>{data.name}</Typography>

                            </>}
                    </Box>

                </Box>


            )}

        </Box>

    )
}
