import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'

export const DropDown = (props: any) => {

    const { text, dropData, value, setValue } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (

        <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography>{text}</Typography>

            </Box>

            <Select sx={{ flex: 2, width: "100%", mb: 2 }}
                id={text}
                value={value}
                onChange={handleChange}
            >

                <MenuItem value={"null"} disabled >Select a {text}</MenuItem>

                {dropData.map((data: any) =>

                    <MenuItem value={data}>{data}</MenuItem>

                )}

            </Select>

        </Box>

    )
}
