import { Box, Checkbox, Divider, Grid, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DropDown2 } from '../../UI/DropDown/DropDown';


export const Timing = (props: any) => {


    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    const { days, setDays } = props;


    const timeSlot = [


        "2022-10-04T05:00:00.127Z", "2022-10-04T05:30:00.127Z", "2022-10-04T06:00:00.127Z", "2022-10-04T06:30:00.127Z",
        "2022-10-04T07:00:00.127Z", "2022-10-04T07:30:00.127Z", "2022-10-04T08:00:00.127Z", "2022-10-04T08:30:00.127Z",
        "2022-10-04T09:00:00.127Z", "2022-10-04T09:30:00.127Z", "2022-10-04T10:00:00.127Z", "2022-10-04T11:30:00.127Z",

        "2022-10-04T12:00:00.127Z", "2022-10-04T12:30:00.127Z", "2022-10-04T13:00:00.127Z", "2022-10-04T13:30:00.127Z",
        "2022-10-04T14:00:00.127Z", "2022-10-04T14:30:00.127Z", "2022-10-04T15:00:00.127Z", "2022-10-04T15:30:00.127Z",

        "2022-10-04T16:00:00.127Z", "2022-10-04T16:30:00.127Z", "2022-10-04T17:00:00.127Z", "2022-10-04T17:30:00.127Z",
        "2022-10-04T18:00:00.127Z", "2022-10-04T18:30:00.127Z", "2022-10-04T19:00:00.127Z", "2022-10-04T19:30:00.127Z",

        "2022-10-04T20:00:00.127Z", "2022-10-04T20:30:00.127Z", "2022-10-04T21:00:00.127Z", "2022-10-04T21:30:00.127Z",
        "2022-10-04T22:00:00.127Z", "2022-10-04T22:30:00.127Z", "2022-10-04T23:00:00.127Z", "2022-10-04T23:30:00.127Z",
        "2022-10-04T00:00:00.127Z",
    ]


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


            <Grid container lg={12} sx={{ justifyContent: "center", alignItems: 'center', bgcolor: "white" }}>

                <Box sx={{ width: "100%" }}>

                    {/* <Box sx={{
                        width: "100%",
                        height: "70px",
                        cursor: "pointer",
                        mb: 1, flex: 1, display: "flex", justifyContent: "start", alignItems: "center",
                        m: 1, p: 1, borderRadius: "10px"

                    }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >All Day</Typography>

                        </Box>


                        <Box sx={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center", }}>

                            <Switch  {...label}
                                name="isOpen"
                                onChange={(event: any) => handleChangeChecked(0, event)}

                            />

                            <Typography >{days[0].isOpen ? "Open" : "Closed"}</Typography>


                        </Box>



                        <Box sx={{ flex: 5, display: "flex", alignItems: "center" }}>

                            {days[0].isOpen &&

                                <>

                                    <DropDown2
                                        dropData={timeSlot}
                                        value={days[0].start}
                                        name="start"
                                        onChange={(event: any) => handleChangeInput(0, event)} />


                                    <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>


                                    <DropDown2
                                        dropData={timeSlot}
                                        value={days[0].end}
                                        name="end"
                                        onChange={(event: any) => handleChangeInput(0, event)} />


                                </>

                            }


                        </Box>


                    </Box> */}

                    <Divider />

                    {days.map((data: any, index: any) =>

                        <Box sx={{
                            width: "100%",
                            height: "70px",
                            cursor: "pointer",
                            mb: 1, flex: 1, display: "flex", justifyContent: "start", alignItems: "center",
                            m: 1, p: 1, borderRadius: "10px"

                        }}>

                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >{data.day}</Typography>

                            </Box>


                            <Box sx={{ flex: 1, display: "flex", justifyContent: "start", alignItems: "center", }}>

                                <Switch  {...label}
                                    name="isOpen"
                                    defaultChecked={data.isOpen} onChange={(event: any) => handleChangeChecked(index, event)}

                                />

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }} >{days[index].isOpen ? "Open" : "Closed"}</Typography>


                            </Box>



                            <Box sx={{ flex: 5, display: "flex", alignItems: "center" }}>

                                {days[index].isOpen &&

                                    <>

                                        <DropDown2
                                            dropData={timeSlot}
                                            value={days[index].start}
                                            defaultValue={"2022-10-04T05:00:00.127Z"}
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

