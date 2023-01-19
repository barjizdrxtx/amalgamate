import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { DateSelector } from '../../UI/DatePicker/DatePicker';

export const OtherDetails = (props: any) => {

    const { list, formik, request,

        software_support,
        setSoftWareSupport,

        hardware_support,
        setHardwareSupport,

        network_support,
        setNetworkSupport,

        next_amc_date,
        setNextAmcDate


    } = props;

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setNextAmcDate(newValue);
    };


    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12} alignItems="center">

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

                            <Box key={index} sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                                <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                                </Box>

                                < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                    fullWidth
                                    id={data.label}
                                    name={data.label}
                                    // label={data.label}
                                    value={data.value}
                                    type={data.type}
                                    onChange={formik.handleChange}
                                    error={data.touched && Boolean(data.errors)}
                                    helperText={data.touched && data.errors}
                                />

                            </Box>

                        </Grid>
                    )}

                    <Grid container xs={12} sm={6} lg={4}>

                        <DateSelector />

                    </Grid>

                    <Grid container xs={12} sm={6} lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} defaultChecked={request?.software_support} onClick={() => setSoftWareSupport(!software_support)} />} label="Software Support" />

                        </FormGroup>

                    </Grid>

                    <Grid container xs={12} sm={6} lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} defaultChecked={request?.hardware_support} onClick={() => setHardwareSupport(!hardware_support)} />} label="Hardware Support" />

                        </FormGroup>

                    </Grid>

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} defaultChecked={request?.network_support} onClick={() => setNetworkSupport(!network_support)} />} label="Network Support" />

                        </FormGroup>

                    </Grid>

                </Grid>

            </form>

        </Grid >

    )
}