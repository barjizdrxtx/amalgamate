import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { siderbar } from './helper';
import { GREY_COLOR, LIGHT_COLOR, LIGHT_GREY_COLOR, PRIMARY_COLOR } from '../../../utls/colors';

export const Sidebar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const Expand = () => {

        setIsExpand(!isExpand)
    }

    return (

        <Box sx={{
            overflow: "hidden", width: 'fit-content',
            px: 1,
            backgroundColor: "white", borderRight: "1px solid #EAEDED"
        }}>

            <Box onClick={Expand} sx={{ cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", p: 2 }}>

                <KeyboardDoubleArrowLeftIcon
                    sx={{ color: PRIMARY_COLOR, fontSize: "2rem", transform: isExpand ? "rotate(0deg)" : "rotate(180deg)" }} />

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

                        <data.icon sx={{ color: data.path === router.asPath ? PRIMARY_COLOR : GREY_COLOR, }} />


                        {isExpand &&

                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px",
                                        color: data.path === router.asPath ? PRIMARY_COLOR : GREY_COLOR,
                                        fontWeight: data.path === router.asPath ? "bold" : "normal",

                                    }}>{data.name}</Typography>

                            </>}

                    </Box>

                </Box>

            )}

        </Box >

    )
}
