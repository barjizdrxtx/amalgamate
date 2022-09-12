import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';
import axios from 'axios';
import { TextEditor } from '../../TextEditor';

export const AllTabs = (props: any) => {

    const { inputfield, setInputField } = props;

    console.log("inputfield", inputfield)


    const AddImages = (index: any, event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            const values = [...inputfield]
            values[index]['image'] = response.data.result.file_location
            setInputField(values)

        })
    }


    const handleChangeInput = (index: any, content: any, name: any) => {

        const values = [...inputfield]

        values[index][name] = content

        setInputField(values)

    }

    const handleAddFields = () => {

        setInputField([...inputfield, { id: inputfield.length + 1 }])
        console.log(inputfield)
    }

    const handleRemoveFields = () => {
        setInputField((inputfield: any) => inputfield.filter((_: any, i: any) => i !== inputfield.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            <Grid lg={12}>

                {inputfield.map((add: any, index: any) =>

                    <Box sx={{
                        width: "100%", display: "flex", flexDirection: "column",
                        justifyContent: "start", alignItems: "center", mb: 4
                    }}>


                        <Box sx={{
                            width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
                        }}>


                            <Typography sx={{ flex: 1 }}>Title</Typography>


                            <Box sx={{ flex: 5, width: "100%", mb: 2 }}>

                                <TextEditor defaultValue={inputfield[index].title}
                                    onChange={(content: any) => handleChangeInput(index, content, 'title')} />

                            </Box>

                        </Box>


                        <Box sx={{
                            width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
                        }}>


                            <Typography sx={{ flex: 1 }}>Discription</Typography>


                            <Box sx={{ flex: 5, width: "100%", mb: 2 }}>

                                <TextEditor defaultValue={inputfield[index].title}
                                    onChange={(content: any) => handleChangeInput(index, content, 'description')} />

                            </Box>

                        </Box>


                        <Box sx={{
                            display: "flex", flexDirection: "column", justifyContent: "end",
                            alignItems: "end",
                        }}>

                            <Box sx={{ width: "50%" }}>

                                <Box sx={{
                                    backgroundColor: "lightgray", width: "150px", mb: 2,
                                    height: "100px", display: "flex", justifyContent: "center", alignItems: "center"
                                }}>

                                    {inputfield[index].image === undefined ? <ImageIcon sx={{ fontSize: "4rem" }} />

                                        :

                                        <img src={inputfield[index].image} width="100%" />

                                    }

                                </Box>

                            </Box>

                            <Box sx={{ display: "flex", width: "50%" }}>

                                <Stack direction="row" alignItems="center" spacing={2}>

                                    <Button variant="contained" component="label">
                                        Upload

                                        <input hidden type='file' key="image" id="outlined-basic"

                                            onChange={(event: any) => AddImages(index, event)} />

                                    </Button>

                                </Stack>

                            </Box>

                        </Box>

                    </Box>

                )}


            </Grid>

            <Grid>

                <Box sx={{ display: "flex" }}>
                    <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{inputfield.length > 1
                        && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                    }

                </Box>
            </Grid>

        </Grid>
    )
}
