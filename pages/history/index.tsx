import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import React from 'react'
import { CustomizedButton } from '../../components/UI/Button/CustomizedButton';
import { DropDown } from '../../components/UI/DropDown/DropDown';
import { TableUI } from '../../components/UI/TableUI/TableUI';
import { useQueryFetch } from '../../hooks/useQueryFetch';
import { PRIMARY_COLOR } from '../../utls/colors';
import * as moment from 'moment'


const index = () => {

    const [type, setType] = React.useState(0);

    const [type_id, setTypeId] = React.useState(0);


    const { fetchedData: fetchedData } = useQueryFetch(`search-history?type=${type}&type_id=${type_id}`);


    const history = fetchedData?.result

    const dropData = [

        {
            name: "client",
        },
        {
            name: "user",
        },
        {
            name: "date",
        },

    ]


    return (

        <Grid container justifyContent="start">

            <Grid container alignItems="center">

                <DropDown text="Select Type" value={type} setValue={setType} dropData={dropData} name="name" />

                <Grid>

                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Type ID</Typography>

                    <TextField onChange={(e: any) => setTypeId(e.target.value)} />

                </Grid>

            </Grid>



            {history?.map((data: any) =>

                <Grid container lg={4} sx={{ bgcolor: "", borderBottom: "1px solid black", p: 1 }}>

                    <Grid container lg={12}>

                        <Typography>Client Name</Typography>

                        <Typography sx={{ mx: 1 }}>{data?.client?.customer_name}</Typography>

                    </Grid>

                    <Grid container lg={12}>

                        <Typography>User Name</Typography>

                        <Typography sx={{ mx: 1 }}>{data.user.username}</Typography>

                    </Grid>


                    <Grid container lg={12}>

                        <Typography>Purpose </Typography>

                        <Typography sx={{ mx: 1 }}>{data.pupose}</Typography>

                    </Grid>

                    <Grid container lg={12}>

                        <Typography>Date </Typography>

                        <Typography sx={{ mx: 1 }}>{moment.utc(data.createdAt).format('MMMM Do YYYY, hh:mm A')}</Typography>

                    </Grid>

                </Grid>

            )}

        </Grid >

    )
}

export default index


