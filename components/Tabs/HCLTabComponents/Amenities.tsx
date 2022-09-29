import { Box, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomizedButton } from '../../UI/Button/CustomizedButton';

export const Amenities = (props: any) => {

    const { amineties, setAmenities } = props;

    const [data, setData] = useState();


    const handleChangeInput = (index: any, event: any) => {
        const values = [...amineties]
        values[index][event.target.name] = !amineties[index].checked
        setAmenities(values)
    }


    const handleAddFields = () => {

        setAmenities([...amineties, { title: data, checked: true, }])


    }

    const handleRemoveFields = () => {
        setAmenities((amineties: any) => amineties.filter((_: any, i: any) => i !== amineties.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {amineties.map((data: any, index: any) =>

                <Grid key={index} lg={2}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Typography>{data.title}</Typography>

                        <Checkbox name="checked" defaultChecked={data.checked} onChange={(event: any) => handleChangeInput(index, event)} />

                    </Box>

                </Grid>
            )}


            <Grid lg={12}>

                <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>


                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Add More</Typography>


                    < TextField onChange={(e: any) => setData(e.target.value)} />

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

