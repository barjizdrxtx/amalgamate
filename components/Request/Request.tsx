import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import { TableUI } from '../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../utls/colors';

export const Request = () => {

    const router = useRouter();

    const tableHead = [

        
        "Client ID",
        "Customer Name",
        "Shop Name",
        "Contact Number",
        "Software Name"
    ];

    const element = [
        "client_id",
        "customer_name",
        "shop_name",
        "contact_number",
        "software_name"
    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/request/create")} bgcolor={PRIMARY_COLOR}>Registration</CustomizedButton>

            <TableUI tableName="Registration" tableHead={tableHead}
                element={element} name="request" actions={actions} disableImage={true} />

        </Grid>

    )
}