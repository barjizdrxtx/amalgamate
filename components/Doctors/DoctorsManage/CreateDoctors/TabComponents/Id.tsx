import { Box, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Id = (props: any) => {

    const [role, setRole]: any = useState();

    const { formik } = props;

    const [inputfield, setInputField]: any = useState([{ id: 1 }]);


    const [value, setValue] = React.useState<Date | null>(
        new Date(''),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };


    const handleChangeInput = (index: any, event: any) => {
        const values = [...inputfield]
        values[index][event.target.name] = event.target.value
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

        <Grid container lg={12} sx={{ backgroundColor: "white", }}>

            <Grid lg={12} sx={{ display: "flex" }}>






                <Box sx={{ flex: 4, width: "100%", mb: 2, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

                    {inputfield.map((add: any, index: any) =>


                        <Box key={index}  sx={{ flex: 4, width: "100%", mb: 2, display: "flex", justifyContent: "space-around", alignItems: "center" }}>




                            <Box sx={{  flex: 1, display: "flex", justifyContent: "center",alignItems:"center"}}>

                              
                                    <Typography sx={{mr:1}}>Id Proof{index + 1}</Typography>

                               

                                <Select sx={{ flex: 1}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Age"
                                    onChange={(e: any) => setRole(e.target.value)}
                                >
                                    <MenuItem value="Aadhar">Aadhar</MenuItem>
                                    <MenuItem value="Driving Licence">Driving Licence</MenuItem>
                                    <MenuItem value="Voters Id">Voters Id</MenuItem>
                                    <MenuItem value="Pan Number">Pan Number</MenuItem>
                                </Select>

                            </Box>



                            <Box sx={{  flex: 1, display: "flex", justifyContent: "center" ,alignItems:"center"}}>

                                <Typography sx={{mx:1}}>Id No{index + 1}</Typography>


                                < TextField 
                                    fullWidth
                                    id="outlined-multiline-static"
                                    name=""
                                    // label={data.label}
                                    value={formik.values.specialisedIn}
                                    type="text"
                                    onChange={formik.handleChange}
                                    error={formik.touched.specialisedIn && Boolean(formik.errors.specialisedIn)}
                                    helperText={formik.touched.specialisedIn && formik.errors.specialisedIn}
                                />

                            </Box>


                            < TextField sx={{ flex: 1, ml: 2 }}
                                fullWidth
                                id="outlined-multiline-static"
                                name=""
                                // label={data.label}
                                value={formik.values.specialisedIn}
                                type="file"
                                onChange={formik.handleChange}
                                error={formik.touched.specialisedIn && Boolean(formik.errors.specialisedIn)}
                                helperText={formik.touched.specialisedIn && formik.errors.specialisedIn}
                            />
                        </Box>
                    )}

                    <Box sx={{ display: "flex" }}>
                        <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{inputfield.length > 1
                            && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                        }

                    </Box>

                </Box>




            </Grid>



        </Grid >
    )
}
