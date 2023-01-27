import { Box, Button, Grid, } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { useJwt } from '../../../hooks/useJwt';
import Typography from '@mui/material/Typography';

export const FileUpload = (props: any) => {

    const { file_upload, setFileUpload } = props;

    const token = useJwt();


    const onFileUpload = (event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`file/upload`, formData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then((response: any) => {

            setFileUpload(response.data.result.file_path)

        }).catch((response: any) => {

        })
    }


    return (

        <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "end",
            alignItems: "end", m: 1
        }}>

            <Box sx={{ width: "100%", position: "relative" }}>

                <Box sx={{ mb: 1, flex: 1}}>

                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Upload File</Typography>

                </Box>

                <Box sx={{
                    backgroundColor: "lightgray", width: "150px", mb: 2,
                    height: "150px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                }}>

                    {file_upload === undefined ? <ImageIcon sx={{ fontSize: "2.5rem" }} />

                        :

                        <img src={file_upload} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />

                    }

                </Box>

                <Button component="label" sx={{
                    width: "150px", height: "150px",
                    bgcolor: "transparent", position: "absolute", top: "0"
                    , left: "0"
                }}>

                    <input hidden type='file' key="image" id="outlined-basic"

                        onChange={(event: any) => onFileUpload(event)} />

                </Button>

            </Box>

        </Box >



    )
} 