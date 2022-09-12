import { Box, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Info = (props: any) => {

    const { tabData1, formik } = props;

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

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {/* {tabData1.map((data: any) =>

                <Grid lg={12}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                            <Typography>{data.title}</Typography>

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
            )} */}


            <Grid lg={12}>

                <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                        <Typography>Qualification</Typography>

                    </Box>


                    <Box sx={{ flex: 4, width: "100%", mb: 2, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

                        {inputfield.map((add: any) => <Box sx={{ flex: 4, width: "100%", mb: 2, display: "flex", justifyContent: "space-around" }}>

                            < TextField sx={{ flex: 4, width: "100%" }}
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

                            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ flex: 2, width: "100%", m: 2 }}>

                                <Stack>
                                    <DesktopDatePicker
                                        // label="Date desktop"
                                        inputFormat="MM/dd/yyyy"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>


                            < TextField sx={{ flex: 4, width: "100%", ml: 2 }}
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



                </Box>

            </Grid>



        </Grid >
    )
}
