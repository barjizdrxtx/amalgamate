import { Box, Button, Grid, } from '@mui/material'
import React from 'react'

import axios from 'axios';
import { useJwt } from '../../../hooks/useJwt';

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

                <input type='file' key="image" id="outlined-basic"

                    onChange={(event: any) => onFileUpload(event)} />

            </Box>

        </Box >

    )
}


