import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';
import axios from 'axios';

export const Info = (props: any) => {

    const { tabData1, formik, documents, setDocuments } = props;


    const AddImages = (index: any, event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`documents`, formData).then((response) => {

            const values = [...documents]
            values[index]['image'] = response.data.result.file_location
            setDocuments(values)

        })
    }

    const handleChangeInput = (index: any, event: any) => {
        const values = [...documents]
        values[index][event.target.name] = event.target.value
        setDocuments(values)
    }


    const handleAddFields = () => {

        setDocuments([...documents, { id: documents.length + 1 }])

    }

    const handleRemoveFields = () => {
        setDocuments((documents: any) => documents.filter((_: any, i: any) => i !== documents.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            <Grid container lg={12} sx={{ backgroundColor: "white" }}>

                {tabData1.map((data: any) =>

                    <Grid lg={12}>

                        <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                            </Box>

                            < TextField sx={{ flex: 4, width: "100%", mb: 2 }}
                                fullWidth
                                id="outlined-multiline-static"
                                multiline
                                rows={data.rows}
                                name={data.label}
                                // label={data.label}
                                value={data.value}
                                type={data.type}
                                onChange={formik.handleChange}
                                error={data.touched && Boolean(data.errors)}
                                helperText={data.touched && data.errors}
                            />

                        </Box>

                    </Grid>
                )}
            </Grid >

            <Grid lg={12}>

                {documents.map((add: any, index: any) =>

                    <Box sx={{
                        width: "100%", display: "flex", flexDirection: "column",
                        justifyContent: "start", alignItems: "center", mb: 4
                    }}>


                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>


                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Certificates</Typography>

                            </Box>


                            <Box sx={{ flex: 4, width: "100%", mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <TextField sx={{ flex: 1, width: "100%" }} defaultValue={documents[index].document_name}
                                    name="document_name"
                                    onChange={(event: any) => handleChangeInput(index, event)} />

                                <TextField sx={{ flex: 1, width: "100%" }} type='file' key="image" id="outlined-basic"
                                    name="document_location"
                                    onChange={(event: any) => AddImages(index, event)} />

                            </Box>

                        </Box>

                    </Box>

                )}


            </Grid>

            <Grid>

                <Box sx={{ display: "flex" }}>
                    <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{documents.length > 1
                        && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                    }

                </Box>
            </Grid>

        </Grid>
    )
}
