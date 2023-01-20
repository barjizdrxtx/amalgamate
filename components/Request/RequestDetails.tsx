import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { useQueryFetchId } from '../../hooks/useQueryFetch';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export const RequestDetails = () => {

    const router = useRouter();

    const { id } = router.query;

    const { fetchedData: fetchedData } = useQueryFetchId(`request`, id);

    const request = fetchedData?.result


    console.log("request", request)

    const details = [


        {
            title: "Client Id",
            data: "client_id",
        },
        {
            title: "Customer Name",
            data: "customer_name",
        },
        {
            title: "Shop Name",
            data: "shop_name",
        },
        {
            title: "Shop Address",
            data: "shop_address",
        },
        {
            title: "Contact Number",
            data: "contact_number",
        },
        {
            title: "Contact Person",
            data: "contact_person",
        },
        {
            title: "Cr No",
            data: "cr_no",
        },
        {
            title: "Email",
            data: "email",
        },
        {
            title: "Wwner Contact No",
            data: "owner_contact_no",
        },
        {
            title: "Software Name",
            data: "software_name",
        },
        {
            title: "Shop Category",
            data: "shop_category",
        },

        {
            title: "Erp System Count",
            data: "erp_system_count",
        },
        {
            title: "Pos System Count",
            data: "pos_system_count",
        },
        {
            title: "User Limit",
            data: "user_limit",
        },
        {
            title: "Active Erp",
            data: "active_erp",
        },
        {
            title: "Active Pos",
            data: "active_pos",
        },


        {
            title: "Amc",
            data: "amc",
        },


        {
            title: "Server Password",
            data: "server_password",
        },
        {
            title: "Anydesk Password",
            data: "anydesk_password",
        },
        {
            title: "Server Configuration",
            data: "server_configuration",
        },
        {
            title: "Sql Password",
            data: "sql_password",
        },


    ]

    const checkbox = [

        {
            title: "Erp",
            data: "erp",
        },
        {
            title: "Pos",
            data: "pos",
        },
        {
            title: "Erp Pos",
            data: "erp_pos",
        },

        {
            title: "Software Support",
            data: "software_support",
        },
        {
            title: "Hardware Support",
            data: "hardware_support",
        },
        {
            title: "Network Support",
            data: "network_support",
        },

    ]


    return (

        <Grid container justifyContent="center">

            <Grid container lg={11} sx={{
                height: "100vh",
                bgcolor: "white", my: 2, borderRadius: "20px",
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
            }}>

                <Grid container md={6} lg={6}>

                    <Typography>{request?.file_location}</Typography>

                </Grid>


                {details.map(data =>


                    <Grid container md={6} lg={6} sx={{
                        width: "100%", p: 1,
                        borderBottom: "1px solid #E5E7E9",
                        display: "flex", justifyContent: "space-around", alignItems: "center"
                    }}>

                        <Typography sx={{ flex: 1, fontWeight: "bold" }}>{data.title}</Typography>

                        <Typography sx={{ flex: 1 }}>{request?.[data.data]}</Typography>

                    </Grid>


                )}

                <Grid container md={6} lg={6} sx={{
                    width: "100%", p: 1,
                    borderBottom: "1px solid #E5E7E9",
                    display: "flex", justifyContent: "space-around", alignItems: "center"
                }}>

                    <Typography sx={{ flex: 1, fontWeight: "bold" }}>Next Amc Date</Typography>

                    <Typography sx={{ flex: 1 }}>{request?.next_amc_date}</Typography>

                </Grid>

                {checkbox.map((data: any) =>

                    <Grid container md={6} lg={6} sx={{
                        width: "100%", px: 1,
                        borderBottom: "1px solid #E5E7E9",
                        display: "flex", justifyContent: "space-around", alignItems: "center"
                    }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>

                        </Box>

                        <Box sx={{ flex: 1 }}>

                            <Checkbox checked={request?.[data.data]} />

                        </Box>


                    </Grid>

                )}

            </Grid >


        </Grid >

    )
}
