import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export const DateSelector = (props: any) => {

    const { next_amc_date, setNextAmcDate } = props;

    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (

        <Box sx={{
            width: "100%", m: 1, display: "flex", flexDirection: "column",
            justifyContent: "start", alignItems: "start"
        }}>

            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Next Amc Date</Typography>

            </Box>


            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker
                    value={next_amc_date}
                    onChange={(newValue) => {
                        setNextAmcDate(newValue);
                    }}
                    renderInput={(params) => <TextField sx={{ width: "100%" }} {...params} />}
                />
            </LocalizationProvider>

        </Box>


    )
}