import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import { TableUI } from '../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../utls/colors';

export const Request = () => {

    const router = useRouter();

    const tableHead = [

        "Customer Name",
        "Shop Name",
        "Shop Address",
        "Contact Number",
        "Email"
    ];

    const element = [

        "customer_name",
        "shop_name",
        "shop_address",
        "contact_number",
        "email"
    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/request/create")} bgcolor={PRIMARY_COLOR}>Create Request</CustomizedButton>

            <TableUI tableName="request" tableHead={tableHead}
                element={element} name="request" actions={actions} disableImage={true} />

        </Grid>

    )
}