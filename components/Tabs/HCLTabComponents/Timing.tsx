import { Box, Checkbox, Grid, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DropDown2 } from '../../UI/DropDown/DropDown';


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
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },
        {
            title: "Monday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },
        {
            title: "TuesDay",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },
        {
            title: "Wednesday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },

        {
            title: "Thursday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },
        {
            title: "Friday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },
        {
            title: "Saturday",
            isOpen: false,
            start: "5:00 Am",
            end: "12:00 Pm"
        },

    ]);



    const handleChangeInput = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = event.target.value
        setDays(values)
    }


    const handleChangeChecked = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = !days[index].isOpen
        setDays(values)
    }

   

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


            <Grid container lg={12} sx={{ justifyContent: "center", alignItems: 'center' }}>

                <Box sx={{ width: "60%" }}>

                    {days.map((data: any, index: any) =>

                        <Box sx={{
                            width: "100%",
                            height: "70px",
                            cursor: "pointer",
                            mb: 1, flex: 1, display: "flex", justifyContent: "start", alignItems: "center",
                            m: 1, p: 1, borderRadius: "10px"

                        }}>

                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >{data.title}</Typography>

                            </Box>


                            <Box sx={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center", }}>

                                <Switch  {...label}
                                    name="isOpen"
                                    defaultChecked={data.isOpen} onChange={(event: any) => handleChangeChecked(index, event)}

                                />

                                <Typography >{days[index].isOpen ? "Open" : "Closed"}</Typography>


                            </Box>



                            <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>

                                {days[index].isOpen &&

                                    <>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].start}
                                            name="start"
                                            onChange={(event: any) => handleChangeInput(index, event)} />


                                        <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>


                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].end}
                                            name="end"
                                            onChange={(event: any) => handleChangeInput(index, event)} />


                                    </>

                                }


                            </Box>


                        </Box>

                    )}

                </Box>

            </Grid >

        </Grid >
    )
}

