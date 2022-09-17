import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { subRoutes } from '../../../config/Routes/subRoutes';
import { useDarkmode } from '../../../hooks/useDarkmode';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { PRIMARY_COLOR, LIGHT_COLOR } from '../../../url';

export const SubSidebar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const darkmode = useDarkmode();


    const [bool, setBool] = useState([]);


    const Expand = () => {

        setIsExpand(!isExpand)
    }



    const Open = (index: any) => {

        let newArray: any = [...bool]

        newArray[index] = !newArray[index];

        setBool(newArray)

    }



    return (

        <Box sx={{
            overflow: "hidden", width: 'fit-content',
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


            {subRoutes.map((data: any, index) =>

                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", }}>

                    <Box onClick={() => {

                        // router.push(data.path)
                        Open(index)
                    }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: router.asPath === data.path ? LIGHT_COLOR : "transparent",
                            px: 2, py: 1.2,
                            my: 0.5,
                            borderRadius: "10px",
                            '&:hover': {
                                backgroundColor: router.asPath === data.path ? "none" : PRIMARY_COLOR,
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

                        {bool[index] === true ? <KeyboardArrowDownIcon sx={{ color: 'gray', fontSize: "1.2rem" }} /> : <KeyboardArrowRightIcon sx={{ color: 'gray', fontSize: "1.2rem" }} />}


                    </Box>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        {bool[index] === true && data.children.map((drop: any) =>

                            <Box onClick={() => router.push(drop.path)} sx={{
                                width: "100%",
                                display: "flex",
                                px: 2, py: 1.2,
                                my: 0.5,
                                alignItems: "center",
                                justifyContent: "start",
                                cursor: "pointer",
                                borderRadius: "10px",
                                '&:hover': {
                                    backgroundColor: PRIMARY_COLOR,
                                    transition: "0.3s",
                                },
                            }}>

                                <FiberManualRecordIcon sx={{
                                    color: router.asPath === drop.path ? "#229954" : "black",
                                    fontSize: router.asPath === drop.path ? "0.7rem" : "0.5rem",
                                    mr: "1rem",

                                }} />

                                <Typography variant='subtitle2' sx={{
                                    color: "black",
                                    fontWeight: router.asPath === drop.path ? "bold" : "normal",
                                }}>{drop.text}</Typography>

                            </Box>

                        )}

                    </Box>

                </Box>


            )}

        </Box>

    )
}
