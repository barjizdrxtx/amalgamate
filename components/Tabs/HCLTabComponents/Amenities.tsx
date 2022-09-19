import { Box, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomizedButton } from '../../UI/Button/CustomizedButton';

export const Amenities = (props: any) => {

    const { amineties, setAmenities } = props;

    const [data, setData] = useState();

    console.log("amineties", amineties)


    const handleChangeInput = (index: any, event: any) => {
        const values = [...amineties]
        values[index][event.target.name] = !amineties[index].checked
        setAmenities(values)
    }


    const handleAddFields = () => {

        setAmenities([...amineties, { title: data, checked: true, }])
        console.log(amineties)

    }

    const handleRemoveFields = () => {
        setAmenities((amineties: any) => amineties.filter((_: any, i: any) => i !== amineties.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {amineties.map((data: any, index: any) =>

                <Grid key={index} lg={12}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                            <Typography>{data.title}</Typography>

                        </Box>

                        <Checkbox name="checked" defaultChecked={data.checked} onChange={(event: any) => handleChangeInput(index, event)} />

                    </Box>

                </Grid>
            )}


            <Grid lg={12}>

                <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                        <Typography>Add More</Typography>

                    </Box>

                    < TextField sx={{ flex: 2, width: "100%", mb: 2 }} onChange={(e: any) => setData(e.target.value)} />

                </Box>

            </Grid>

            <Box sx={{ display: "flex" }}>
                <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{amineties.length > 4
                    && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                }

            </Box>

        </Grid>
    )
}

