import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { DateSelector, InstallationDateSelector } from '../../UI/DateSelector/DateSelector';
import { DropDown, SelectComponent } from '../../UI/DropDown/DropDown';

export const OtherDetails = (props: any) => {

    const { list, formik,

        software_support,
        setSoftWareSupport,

        hardware_support,
        setHardwareSupport,

        network_support,
        setNetworkSupport,

        next_amc_date,
        setNextAmcDate,

        installationDate,
        setInstallationDate,

        amcMonth,
        setAmcMonth,

        amcDate,
        setAmcDate,


    } = props;

    const months = [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" },
      ];



    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12} alignItems="center">

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

                            <Grid sx={{ m: 1 }}>

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                                < TextField sx={{ width: "100%", my: 1 }}
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

                            </Grid>

                        </Grid>
                    )}

                    {/* <Grid container xs={12} sm={6} lg={4}>

                        <DateSelector next_amc_date={next_amc_date}
                            setNextAmcDate={setNextAmcDate} />

                    </Grid> */}

                    <Grid container xs={12} sm={6} lg={4}>

                        <InstallationDateSelector installationDate={installationDate}
                            setInstallationDate={setInstallationDate} />

                    </Grid>

                    <Grid container xs={12} sm={6} lg={4}>

                        <SelectComponent text="AMC Month" value={amcMonth} setValue={setAmcMonth} dropData={months} id="name" name="name" />

                    </Grid>

                    {/* <Grid container xs={12} sm={6} lg={4}>

                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>AMC Date</Typography>

                    < TextField sx={{ width: "100%", my: 1 }}
                        fullWidth
                        value={amcDate}
                        onChange={(e) => setAmcDate(+e.target.value)}
                    />

                    </Grid> */}

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} checked={software_support} onClick={() => setSoftWareSupport(!software_support)} />} label="Software Support" />

                        </FormGroup>

                    </Grid>

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} checked={hardware_support} onClick={() => setHardwareSupport(!hardware_support)} />} label="Hardware Support" />

                        </FormGroup>

                    </Grid>

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox sx={{ m: 1 }} checked={network_support} onClick={() => setNetworkSupport(!network_support)} />} label="Network Support" />

                        </FormGroup>

                    </Grid>

                </Grid>

            </form>

        </Grid >

    )
}