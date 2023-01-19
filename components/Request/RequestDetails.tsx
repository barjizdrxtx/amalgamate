import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { useQueryFetchId } from '../../hooks/useQueryFetch';

export const RequestDetails = () => {

    const router = useRouter();

    const { id } = router.query;

    const { fetchedData: fetchedData } = useQueryFetchId(`request`, id);

    const request = fetchedData?.result


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
            title: "Erp",
            data: "erp",
        },
        {
            title: "Erp Pos",
            data: "erp_pos",
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
        {
            title: "Next Amc Date",
            data: "next_amc_date",
        },

    ]


    return (

        <Grid container sx={{ bgcolor: "red" }}>


            {details.map(data =>


                <Box sx={{
                    width: "100%", bgcolor: "white", p: 1,
                    borderBottom: "1px solid lightgrey",
                    display: "flex", justifyContent: "space-around", alignItems: "center"
                }}>

                    <Typography sx={{ flex: 1, fontWeight: "bold" }}>{data.title}</Typography>

                    <Typography sx={{ flex: 1 }}>{request?.[data.data]}</Typography>

                </Box>


            )}

        </Grid >

    )
}
