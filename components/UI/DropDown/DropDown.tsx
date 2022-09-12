import { Box, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'

export const DropDown = () => {

    const [type, setType]: any = useState();

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return (

        <Grid lg={3}>

            <Box sx={{ m: 2 }}>

                <Typography sx={{ width: "100%", mb: 1 }}>Type</Typography>

                <Select sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Age"
                    onChange={handleChange}
                >

                    {['BannerAd', 'BigAd', 'FooterAd'].map(data =>

                        <MenuItem value={data}>{data}</MenuItem>

                    )}

                </Select>


            </Box>

        </Grid>
    )
}
