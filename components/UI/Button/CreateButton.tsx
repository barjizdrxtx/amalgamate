import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { useThemeColor } from '../../../hooks/useThemeColor'
import { CustomizedButton } from './CustomizedButton'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const CreateButton = (props: any) => {

    const { title, onCreate, preview, isPreview, setPreview } = props;

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

                {isPreview && <Box onClick={() => setPreview(!preview)} sx={{
                    width: "500px", display: "flex", justifyContent: "center",
                    alignItems: "center", backgroundColor: preview ? "black" : "purple", borderRadius: "10px", p: 1.5, cursor: "pointer"
                }}>

                    <RemoveRedEyeIcon sx={{ mr: 1, color: "white" }} />

                    <Typography
                        sx={{ color: "white", textTransform: "capitalize" }}>{preview ? "Cancel Preview" : title + "Preview"}</Typography>

                </Box>}

                <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>


                    <CustomizedButton bgColor={themecolor} onClick={onCreate}>Create {title}</CustomizedButton >

                    <CustomizedButton bgColor="black" onClick={() => router.push(`/${title}`)}>Cancel</CustomizedButton >

                </Box>

            </Box>

            <Divider />

        </Box >
    )
}
