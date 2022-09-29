import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';
import axios from 'axios';

export const SpecializedIn = (props: any) => {

    const { inputfield, setInputfield } = props;


    const handleChangeInput = (index: any, event: any) => {
        const values = [...inputfield]
        values[index][event.target.name] = event.target.value
        setInputfield(values)
    }


    const handleAddFields = () => {

        setInputfield([...inputfield, { id: inputfield.length + 1 }])

    }

    const handleRemoveFields = () => {
        setInputfield((inputfield: any) => inputfield.filter((_: any, i: any) => i !== inputfield.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            <Grid lg={12}>

                {inputfield.map((add: any, index: any) =>

                    <Box sx={{
                        width: "100%", display: "flex", flexDirection: "column",
                        justifyContent: "start", alignItems: "center", mb: 4
                    }}>


                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>


                            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                <Typography>Specialized In</Typography>

                            </Box>


                            <Box sx={{ flex: 4, width: "100%", mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>


                                <TextField sx={{ flex: 1, width: "100%" }} defaultValue={inputfield[index].specialization}
                                    name="specialization"
                                    onChange={(event: any) => handleChangeInput(index, event)} />


                                <TextField sx={{ flex: 1, width: "100%" }} defaultValue={inputfield[index].years_of_experiance}
                                    name="years_of_experiance"
                                    onChange={(event: any) => handleChangeInput(index, event)} />

                                <TextField sx={{ flex: 1, width: "100%" }} defaultValue={inputfield[index].qualifications}
                                    name="qualifications"
                                    onChange={(event: any) => handleChangeInput(index, event)} />

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
