import { Box, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Languages = (props: any) => {

    const { language, setLanguage } = props;

    const [data, setData] = useState();


    const handleChangeInput = (index: any, event: any) => {
        const values = [...language]
        values[index][event.target.name] = !language[index].checked
        setLanguage(values)
    }


    const handleAddFields = () => {

        setLanguage([...language, { title: data, checked: true, }])


    }

    const handleRemoveFields = () => {
        setLanguage((language: any) => language.filter((_: any, i: any) => i !== language.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            {language.map((data: any, index: any) =>

                <Grid key={index} lg={2}>

                    <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

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
                <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{language.length > 4
                    && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                }

            </Box>

        </Grid>
    )
}
