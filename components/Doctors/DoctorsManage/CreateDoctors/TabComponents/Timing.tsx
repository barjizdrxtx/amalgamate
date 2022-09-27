import { Box, Checkbox, Grid, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DropDown2 } from '../../../../UI/DropDown/DropDown';

export const Timing = (props: any) => {


    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    const timeSlot = [

        "5:00 Am", "5:30 Am", "6:00 Am", "6:30 Am",
        "7:00 Am", "7:30 Am", "8:00 Am", "8:30 Am",
        "9:00 Am", "9:30 Am", "10:00 Am", "10:30 Am",
        "11:00 Am", "11:30 Am", "12:00 Pm", "12:30 Pm",
        "1:00 Pm", "1:30 Pm", "2:00 Pm", "2:30 Pm",
        "3:00 Pm", "3:30 Pm", "4:00 Pm", "4:30 Pm",
        "5:00 Pm", "5:30 Pm", "6:00 Pm", "6:30 Pm",
        "7:00 Pm", "7:30 Pm", "8:00 Pm", "8:30 Pm",
    ]

    const [days, setDays]: any = useState([

        {
            title: "Sunday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },
        {
            title: "Monday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },
        {
            title: "TuesDay",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },
        {
            title: "Wednesday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },

        {
            title: "Thursday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },
        {
            title: "Friday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },
        {
            title: "Saturday",
            session1: false,
            session2: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null
        },

    ]);



    const handleChangeInput = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = event.target.value
        setDays(values)
    }


    const handleChangeSession1 = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = !days[index].session1
        setDays(values)
    }


    const handleChangeSession2 = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = !days[index].session2
        setDays(values)
    }

    console.log("days", days)

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


            <Grid container lg={12} sx={{ justifyContent: "center", alignItems: 'center' }}>

                <Box sx={{ width: "90%" }}>

                    {days.map((data: any, index: any) =>

                        <Box sx={{
                            width: "100%", height: "100px", flex: 1, display: "flex",
                            justifyContent: "start", alignItems: "center",
                        }}>

                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >{data.title}</Typography>

                            </Box>


                            <Box sx={{ flex: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>

                                <Typography sx={{ fontWeight: "bold" }}>Session 1</Typography>

                                <Switch  {...label}
                                    name="session1"
                                    defaultChecked={data.session1} onChange={(event: any) => handleChangeSession1(index, event)}

                                />

                                {days[index].session1 &&

                                    <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].session1_start === null ? "5:00 Am" : days[index].session1_start}
                                            name="session1_start"
                                            onChange={(event: any) => handleChangeInput(index, event)} />

                                        <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].session1_end === null ? "11:30 Am" : days[index].session1_end}
                                            name="session1_end"
                                            onChange={(event: any) => handleChangeInput(index, event)} />

                                    </Box>

                                }

                            </Box>


                            <Box sx={{ flex: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>

                                <Typography sx={{ fontWeight: "bold" }}>Session 2</Typography>

                                <Switch  {...label}
                                    name="session2"
                                    defaultChecked={data.session2} onChange={(event: any) => handleChangeSession2(index, event)}

                                />

                                {days[index].session2 &&

                                    <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].session2_start === null ? "5:00 Am" : days[index].session2_start}
                                            name="session2_start"
                                            onChange={(event: any) => handleChangeInput(index, event)} />

                                        <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].session2_end === null ? "11:30 Am" : days[index].session2_end}
                                            name="session2_end"
                                            onChange={(event: any) => handleChangeInput(index, event)} />

                                    </Box>

                                }

                            </Box>


                        </Box>

                    )}

                </Box>

            </Grid >

        </Grid >
    )
}

