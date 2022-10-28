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

                {dropData.map((data: any) =>

                    <MenuItem value={data}>{data}</MenuItem>

                )}

            </Select>

        </Box>

    )
}



export const DropDownApi = (props: any) => {

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

                {dropData?.map((data: any) =>

                    <MenuItem value={data._id}>{data.test_name}</MenuItem>

                )}

            </Select>

        </Box>

    )
}





export const DropDown2 = (props: any) => {

    const { name, onChange, dropData, value, defaultValue } = props;


    return (

        <Select sx={{ m: 1, fontWeight: "bold", color: "#34495E" }}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
        >

            {dropData.map((data: any, index: any) =>

                <MenuItem key={index} value={data}>{moment.utc(data).format('LT')}</MenuItem>

            )}

        </Select>

    )
}



export const DropDown3 = (props: any) => {

    const { name, onChange, dropData, value, defaultValue } = props;


    return (

        <Select sx={{ m: 1, fontWeight: "bold", color: "#34495E" }}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
        >

            {dropData.map((data: any, index: any) =>

                <MenuItem key={index} value={data}>{data}</MenuItem>

            )}

        </Select>

    )
}

