import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { CustomizedButton } from '../components/UI/Button/CustomizedButton';
import { TableUI } from '../components/UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../utls/colors';

const index = () => {

    const router = useRouter();

    const tableHead = [


        "Client ID",
        "Customer Name",
        "Shop Category",
        "Total Systems",
        "Active Systems",
        "Software Name"
    ];

    const element = [
        "client_id",
        "customer_name",
        "shop_category",
        "total_systems",
        "active_systems",
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

            <TableUI tableName="Registration" tableHead={tableHead} showStatus={true}
                element={element} name="request" actions={actions} />

        </Grid>

    )
}

export default index


