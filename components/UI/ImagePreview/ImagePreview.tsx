import { Box, Button, Grid, IconButton, Stack } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { CustomizedButton } from '../Button/CustomizedButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export const ImagePreview = (props: any) => {

    const { image, setImage } = props;

    console.log("image", image)


    const AddImages = (event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            setImage(response.data.result.file_location)

        }).catch((response) => {
            console.log("response", response.response.data.error)
            alert(response.response.data.error)
        })
    }


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



export const MultiImagePreview = (props: any) => {

    const { image, setImage } = props;

    console.log("image", image)


    const AddImages = (index: any, event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            const values = [...image]
            values[index]['image'] = response.data.result.file_location
            setImage(values)

        })
    }



    const handleChangeInput = (index: any, content: any, name: any) => {

        const values = [...image]

        values[index][name] = content

        setImage(values)

    }


    const handleAddFields = () => {

        setImage([...image, { id: image.length + 1 }])
        console.log(image)
    }

    const handleRemoveFields = () => {
        setImage((image: any) => image.filter((_: any, i: any) => i !== image.length - 1))
    }



    return (

        <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "end",
            alignItems: "end", m: 1
        }}>

            <Grid container lg={12}>

                {image.map((data: any, index: any) =>

                    <Grid lg={3}>

                        <Box sx={{ width: "50%" }}>

                            <Box sx={{
                                backgroundColor: "lightgray", width: "60px", mb: 2,
                                height: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                            }}>

                                {image[index].image === undefined ? <ImageIcon sx={{ fontSize: "1.8rem" }} />

                                    :

                                    <img src={image[index].image} style={{ width: "60px", height: "60px", borderRadius: "10px" }} />

                                }

                            </Box>

                            <Button variant="contained" component="label">
                                Upload
                                <input hidden type='file' key="image" id="outlined-basic"

                                    onChange={(event: any) => AddImages(index, event)} />

                            </Button>

                        </Box>

                    </Grid>

                )}


            </Grid>

            <Box sx={{ display: "flex" }}>

                <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>Add New</CustomizedButton>{image.length > 1
                    && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>Remove</CustomizedButton>
                }

            </Box>


        </Box >

    )
}
