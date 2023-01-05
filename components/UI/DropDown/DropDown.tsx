import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React from 'react'
import * as moment from 'moment'

export const DropDown = (props: any) => {

    const { text, dropData, value, setValue } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (

        <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{text}</Typography>

            </Box>

            <Select sx={{ flex: 2, width: "100%", mb: 2 }}
                id={text}
                value={value}
                onChange={handleChange}
            >

                <MenuItem value={"null"} disabled >Select a {text}</MenuItem>

                {dropData?.map((data: any) =>

                    <MenuItem value={data.category}>{data.category}</MenuItem>

                )}

            </Select>

        </Box>

    )
}


