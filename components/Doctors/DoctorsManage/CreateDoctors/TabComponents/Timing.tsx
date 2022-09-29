import { Box, Checkbox, Divider, Grid, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DropDown2 } from '../../../../UI/DropDown/DropDown';

export const Timing = (props: any) => {


    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    const timeSlot1 = [

        "12:00 Am", "12:30 Am", "1:00 Am", "1:30 Am",
        "2:00 Am", "2:30 Am", "3:00 Am", "4:00 Am",
        "4:30 Am", "5:00 Am", "5:30 Am", "6:00 Am",
        "6:30 Am", "7:00 Am", "7:30 Am", "8:00 Am",
        "8:30 Am", "9:00 Am", "9:30 Am", "10:00 Am",
        "10:30 Am", "11:00 Am", "11:30 Am", "12:00 Pm"]

    const timeSlot2 = [

        "12:00 Pm", "12:30 Pm",
        "1:00 Pm", "1:30 Pm", "2:00 Pm", "2:30 Pm",
        "3:00 Pm", "3:30 Pm", "4:00 Pm"
    ]

    const timeSlot3 = [

        "4:00 Pm", "4:30 Pm", "5:00 Pm", "5:30 Pm",
        "6:00 Pm", "6:30 Pm", "7:00 Pm", "7:30 Pm",
        "8:00 Pm", "8:30 Pm", "8:30 Pm", "9:00 Pm", "9:30 Pm", "10:00 Pm",
        "10:30 Pm", "11:00 Pm", "11:30 Pm", "12:00 Am"
    ]


    const [days, setDays]: any = useState([

        {
            title: "Sunday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },
        {
            title: "Monday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },
        {
            title: "TuesDay",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },
        {
            title: "Wednesday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },

        {
            title: "Thursday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },
        {
            title: "Friday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },
        {
            title: "Saturday",
            session1: false,
            session2: false,
            session3: false,
            session1_start: null,
            session1_end: null,
            session2_start: null,
            session2_end: null,
            session3_start: null,
            session3_end: null
        },

    ]);



    const handleChangeInput = (index: any, event: any) => {
        const values = [...days]
        values[index][event.target.name] = event.target.value
        setDays(values)
    }



    const handleChangeInput2 = (event: any) => {
        const values = [...days]


        for (let i = 0; i < 7; i++) {

            values[i][event.target.name] = event.target.value

        }

        setDays(values)
    }



    const handleChangeAllSession = (event: any, session: any) => {

        const values = [...days]

        for (let i = 0; i < 7; i++) {

            values[i][event.target.name] = !days[i][session]

        }

        setDays(values)

    }


    const handleChangeSession = (index: any, event: any, session: any) => {

        const values = [...days]

        values[index][event.target.name] = !days[index][session]

        setDays(values)
    }




    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>


            <Grid container lg={12} sx={{ justifyContent: "center", alignItems: 'center' }}>



                <Box sx={{ width: "100%" }}>


                    <Box sx={{
                        width: "100%", height: "100px", flex: 1, display: "flex",
                        justifyContent: "start", alignItems: "center",
                    }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >Session Controll</Typography>

                        </Box>


                        {[1, 2, 3].map((numbers: any) =>


                            <Box sx={{ flex: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>

                                <Typography sx={{ fontWeight: "bold" }}>All Session {numbers}</Typography>

                                <Switch   {...label}

                                    name={`session${numbers}`}

                                    onChange={(event: any) => handleChangeAllSession(event, `session${numbers}`)}

                                />


                                {days[0][`session${numbers}`] &&

                                    <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>

                                        <DropDown2
                                            dropData={timeSlot1}
                                            value={days[0][`session${numbers}_start`] === null ? "5:00 Am" : days[0][`session${numbers}_start`]}
                                            name={`session${numbers}_start`}
                                            onChange={(event: any) => handleChangeInput2(event)} />

                                        <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                        <DropDown2
                                            dropData={timeSlot1}
                                            value={days[0][`session${numbers}_end`] === null ? "11:30 Am" : days[0][`session${numbers}_end`]}
                                            name={`session${numbers}_end`}
                                            onChange={(event: any) => handleChangeInput2(event)} />

                                    </Box>

                                }

                            </Box>

                        )}

                    </Box>


                    <Divider/>


                    {days.map((data: any, index: any) =>


                        <Box sx={{
                            width: "100%", height: "100px", flex: 1, display: "flex",
                            justifyContent: "start", alignItems: "center",
                        }}>

                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >{data.title}</Typography>

                            </Box>

                            {[1, 2, 3].map((numbers: any) =>


                                <Box sx={{ flex: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>

                                    <Typography sx={{ fontWeight: "bold" }}>Session {numbers}</Typography>

                                    <Switch checked={days[index][`session${numbers}`]}  {...label}

                                        name={`session${numbers}`}

                                        onChange={(event: any) => handleChangeSession(index, event, `session${numbers}`)}

                                    />

                                    {days[index][`session${numbers}`] &&

                                        <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>

                                            <DropDown2
                                                dropData={timeSlot1}
                                                value={days[index][`session${numbers}_start`] === null ? "5:00 Am" : days[index][`session${numbers}_start`]}
                                                name={`session${numbers}_start`}
                                                onChange={(event: any) => handleChangeInput(index, event)} />

                                            <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                            <DropDown2
                                                dropData={timeSlot1}
                                                value={days[index][`session${numbers}_end`] === null ? "11:30 Am" : days[index][`session${numbers}_end`]}
                                                name={`session${numbers}_end`}
                                                onChange={(event: any) => handleChangeInput(index, event)} />

                                        </Box>

                                    }

                                </Box>


                            )}

                        </Box>


                    )
                    }

                </Box>

            </Grid >

        </Grid >
    )
}

