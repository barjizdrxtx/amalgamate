import { Box, Button, Grid, } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { CustomizedButton } from '../Button/CustomizedButton';


export const FileUpload = (props: any) => {

    const { file_upload, setFileUpload } = props;


    const onFileUpload = (event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`file/upload`, formData).then((response) => {

            setFileUpload(response.data.result.file_path)

        }).catch((response) => {
            alert(response)
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


