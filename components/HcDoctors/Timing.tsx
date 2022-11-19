import { Box, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import { DropDown } from '../UI/DropDown/DropDown';

export const Timing = (props: any) => {

    const days = [

        {
            title: "Monday",
            checked: false,
        },
        {
            title: "TuesDay",
            checked: false,
        },
        {
            title: "Wednesday",
            checked: false,
        },

        {
            title: "Thursday",
            checked: false,
        },
        {
            title: "Friday",
            checked: false,
        },
        {
            title: "Saturday",
            checked: false,
        },
        {
            title: "Sunday",
            checked: false,
        },
    ];


    const [start, setStart] = useState("null");

    const [end, setEnd] = useState("null");


    const [timing, setTiming]: any = useState([{ id: 1 }])

    const [tab, seTab] = useState(0);


    const handleChangeInput = (index: any, event: any) => {
        const values = [...timing]
        values[index][event.target.name] = !timing[index].checked
        setTiming(values)
    }


    const handleAddFields = () => {

        setTiming([...timing, { start: '', end: '', }])

   
    }

    const handleRemoveFields = () => {
        setTiming((timing: any) => timing.filter((_: any, i: any) => i !== timing.length - 1))
    }

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


            <Grid container lg={12} sx={{ justifyContent: "center", alignItems: 'center' }}>

                {days.map((data: any, index: any) =>

                    <Grid key={index} lg={1}>

                        <Box onClick={() => seTab(index)} sx={{

                            backgroundColor: tab === index ? "black" : "white",
                            color: tab === index ? "white" : "black",
                            cursor: "pointer",
                            mb: 1, flex: 1, display: "flex", justifyContent: "center",
                            border: "1px solid black", m: 1, p: 1, borderRadius: "10px"

                        }}>

                            <Typography>{data.title}</Typography>

                        </Box>

                    </Grid>

                )}

            </Grid>



            <Grid container lg={12}>

                {timing.map((data: any, index: any) =>

                    <Grid container key={index} lg={12}>

                        <Grid lg={6}>

                            <DropDown
                                text={`Starting Time ${index + 1}`}
                                dropData={["9.00Am", "10.00Am", "11.00Am"]}
                                value={start}
                                setValue={setStart}
                            />

                        </Grid>

                        <Grid lg={6}>

                            <DropDown
                                text={`Ending Time ${index + 1}`}
                                dropData={["9.00Am", "10.00Am", "11.00Am"]}
                                value={end}
                                setValue={setEnd}
                            />

                        </Grid>

                    </Grid>

                )}


            </Grid>

            <Box sx={{ display: "flex" }}>
                <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{timing.length > 1
                    && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
                }

            </Box>

        </Grid >
    )
}

