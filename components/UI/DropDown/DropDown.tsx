import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React from 'react'

export const DropDown = (props: any) => {

    const { text, dropData, value, setValue, _id, name } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (

        <Grid container>

            <Grid container sx={{ m: 1, bgcolor: "white" }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{text}</Typography>

                <Select sx={{ width: "100%", my: 1, textTransform: "capitalize", bgcolor: "white" }}
                    id={text}
                    value={value}
                    onChange={handleChange}
                >

                    <MenuItem value={0} disabled >Select a {text}</MenuItem>

                    {dropData?.map((data: any, index: any) =>

                        <MenuItem key={index} sx={{ textTransform: "capitalize", width: "100%" }} value={data[name]}>{data[name]}</MenuItem>

                    )}

                </Select>

            </Grid>

        </Grid >

    )
}


