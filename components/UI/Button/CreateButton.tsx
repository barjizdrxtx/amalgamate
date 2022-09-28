import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { useThemeColor } from '../../../hooks/useThemeColor'
import { CustomizedButton } from './CustomizedButton'

export const CreateButton = (props: any) => {

    const { title, onCreate } = props;

    const themecolor = useThemeColor();

    const router = useRouter();

    return (

        <Box>

            <Box sx={{
                width: "100%", display: "flex",
                justifyContent: "space-between", alignItems: "center",
            }}>

                <Box sx={{ width: "100%", display: "flex", m: 2 }}>

                    <Typography variant='h5' color={themecolor} sx={{ fontWeight: "bold" }}>Add New {title}</Typography>

                </Box>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>

                    <CustomizedButton bgColor={themecolor} onClick={onCreate}>Create {title}</CustomizedButton >

                    <CustomizedButton bgColor="black" onClick={() => router.push(`/${title}`)}>Cancel</CustomizedButton >

                </Box>

            </Box>

            <Divider />

        </Box >
    )
}
