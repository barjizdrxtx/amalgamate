import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';

export const ImagePreview = (props: any) => {

    const { image, AddImages } = props;


    return (

        <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "end",
            alignItems: "end", m: 1
        }}>

            <Box sx={{ width: "50%" }}>

                <Box sx={{
                    backgroundColor: "lightgray", width: "120px", mb: 2,
                    height: "120px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                }}>

                    {image === '' ? <ImageIcon sx={{ fontSize: "3rem" }} />

                        :

                        <img src={image} style={{ width: "120px", height: "120px", borderRadius: "10px" }} />

                    }

                </Box>

            </Box>

            <Box sx={{ display: "flex", width: "50%" }}>

                <Stack direction="row" alignItems="center" spacing={2}>

                    <Button variant="contained" component="label">
                        Upload

                        <input hidden type='file' key="image" id="outlined-basic"
                            onChange={(event) => AddImages(event)} />

                    </Button>

                </Stack>

            </Box>

        </Box >

    )
}