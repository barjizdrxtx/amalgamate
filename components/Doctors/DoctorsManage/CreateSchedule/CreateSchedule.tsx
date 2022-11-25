import { Box, Checkbox, Divider, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useQueryFetchId } from '../../../../hooks/useQueryFetch';
import { useThemeColor } from '../../../../hooks/useThemeColor';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { DropDown2 } from '../../../UI/DropDown/DropDown';
import { allDays } from './helper'

export const CreateSchedule = (props: any) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const router = useRouter();

    const { id } = router.query;


    const themecolor = useThemeColor();

    const timeSlot1 = [


        "2022-10-04T05:00:00.127Z", "2022-10-04T05:30:00.127Z", "2022-10-04T06:00:00.127Z", "2022-10-04T06:30:00.127Z",
        "2022-10-04T07:00:00.127Z", "2022-10-04T07:30:00.127Z", "2022-10-04T08:00:00.127Z", "2022-10-04T08:30:00.127Z",
        "2022-10-04T09:00:00.127Z", "2022-10-04T09:30:00.127Z", "2022-10-04T10:00:00.127Z", "2022-10-04T11:30:00.127Z",

        "2022-10-04T12:00:00.127Z", "2022-10-04T12:30:00.127Z", "2022-10-04T13:00:00.127Z", "2022-10-04T13:30:00.127Z",
        "2022-10-04T14:00:00.127Z", "2022-10-04T14:30:00.127Z", "2022-10-04T15:00:00.127Z", "2022-10-04T15:30:00.127Z",

    ]


    const [days, setDays]: any = useState(allDays)


    const onCreate = () => {

        axios.post("/schedule", {
            institution: "practice",
            institution_id: "string",
            doctor_id: id,
            slots: days,
            cancel_flag: false,
            cancel_remarks: "string",
            cancelled_by: "string",
            cancelled_at: "string",
            is_active: true
        })

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


    const handleChangeTime = (index: any, event: any, numbers: any) => {

        const values = [...days]

        values[index][`session_${numbers}`][event.target.name] = event.target.name === "slot_count" ?
            JSON.parse(event.target.value) : event.target.value

        setDays(values)

    }



    return (

        <Grid container sx={{ backgroundColor: "white" }}>


            <Box sx={{ width: "100%" }}>

                <Box>

                    <Box sx={{
                        width: "100%", display: "flex",
                        justifyContent: "space-between", alignItems: "center",
                    }}>

                        <Box sx={{ width: "100%", display: "flex", m: 2 }}>

                            <Typography variant='h5' color={themecolor} sx={{ fontWeight: "bold" }}>Add New Schedule</Typography>

                        </Box>


                        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>


                            <CustomizedButton bgColor={themecolor} onClick={onCreate}>Create Schedule</CustomizedButton >

                            <CustomizedButton bgColor="black" onClick={() => router.push(`/doctors`)}>Cancel</CustomizedButton >


                        </Box>

                    </Box>

                    <Divider />

                </Box >


                <Box sx={{
                    width: "100%", height: "100px", flex: 1, display: "flex",
                    justifyContent: "start", alignItems: "center",
                }}>


                    {[1, 2, 3].map((numbers: any, index: any) =>


                        <Box key={index} sx={{
                            flex: 5, display: "flex",
                            justifyContent: "start", alignItems: "start"
                        }}>



                            <Typography sx={{ fontWeight: "bold", p: 1 }}>All Session {numbers}</Typography>

                            <Checkbox {...label} name={`session${numbers}`}
                                // checked={true}
                                // indeterminate={datas}
                                onChange={(event: any) => handleChangeAllSession(event, `session${numbers}`)} />


                            {
                                days[0][`session${numbers}`] &&

                                <Box sx={{ display: "flex", alignItems: "center" }}>

                                    <DropDown2
                                        dropData={timeSlot1}
                                        defaultValue={"2022-10-04T05:00:00.127Z"}
                                        name={`session${numbers}_start`}
                                        onChange={(event: any) => handleChangeInput2(event)} />

                                    <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                    <DropDown2
                                        dropData={timeSlot1}
                                        defaultValue={"2022-10-04T12:00:00.127Z"}
                                        name={`session${numbers}_end`}
                                        onChange={(event: any) => handleChangeInput2(event)} />


                                    <TextField label="slot"
                                        defaultValue={1}
                                        name='slot_count'
                                        type="number"
                                        onChange={(event: any) => handleChangeInput2(event)} />


                                </Box>

                            }

                        </Box>

                    )}

                </Box>


                <Divider />


                {days.map((data: any, index: any) =>


                    <Box key={index} sx={{
                        width: "100%", height: "100px", flex: 1, display: "flex",
                        justifyContent: "start", alignItems: "center",
                    }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography sx={{ fontWeight: "bold", color: "#2C3E50" }} >{data.day_name}</Typography>

                        </Box>

                        {[1, 2, 3].map((numbers: any) =>


                            <Box sx={{ flex: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>

                                <Box sx={{
                                    flex: 1,
                                    display: "flex", flexDirection: "column",
                                    justifyContent: "center", alignItems: "center"
                                }}>

                                    <Typography sx={{ fontWeight: "bold" }}>Session {numbers}</Typography>



                                    <Checkbox checked={days[index][`session${numbers}`] === true}  {...label}

                                        name={`session${numbers}`}

                                        onChange={(event: any) => handleChangeSession(index, event, `session${numbers}`)} />

                                </Box>

                                {days[index][`session${numbers}`] &&

                                    <Box sx={{ ml: 4, display: "flex", alignItems: "center" }}>

                                        <DropDown2
                                            dropData={timeSlot1}
                                            defaultValue={"2022-10-04T05:00:00.127Z"}
                                            name='starting_time'
                                            onChange={(event: any) => handleChangeTime(index, event, numbers)} />

                                        <Typography sx={{ m: 1, fontWeight: "bold", color: "#2C3E50" }}>To</Typography>

                                        <DropDown2
                                            dropData={timeSlot1}
                                            defaultValue={"2022-10-04T12:00:00.127Z"}
                                            name='ending_time'
                                            onChange={(event: any) => handleChangeTime(index, event, numbers)} />

                                        <TextField label="slot"
                                            defaultValue={1}
                                            name='slot_count'
                                            type="number"
                                            onChange={(event: any) => handleChangeTime(index, event, numbers)} />

                                    </Box>

                                }


                            </Box>

                        )}

                    </Box>

                )
                }

            </Box>



        </Grid >
    )
}

