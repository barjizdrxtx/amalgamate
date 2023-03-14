import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React from 'react'

export const DropDown = (props: any) => {

    const { text, dropData, value, setValue, _id, name } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (

        <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{text}</Typography>

            </Box>

            <Select sx={{ width: "100%", my: 1, textTransform: "capitalize" }}
                id={text}
                value={value}
                onChange={handleChange}
            >

                <MenuItem value={0} disabled >Select a {text}</MenuItem>

                {dropData?.map((data: any, index: any) =>

                    <MenuItem key={index} sx={{ textTransform: "capitalize" }} value={data[name]}>{data[name]}</MenuItem>

                )}

            </Select>

        </Box>

    )
}


