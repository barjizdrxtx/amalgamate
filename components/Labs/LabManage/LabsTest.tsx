import React from 'react'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const LabsTest = () => {

    const router = useRouter();

    const { lab_id } = router.query;

    const tableHead = [


        "test_name",
        "Website",
        "Admin",
        "Location",
        "Contact",

    ];

    const element = [

        "test_name",
        "website",
        "lab_admin_name",
        "location",
        "lab_contact_no"

    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push(`/lab/test/create`)} bgColor="#229954">Create Lab Test</CustomizedButton>

            <TableUI tableName="labs" tableHead={tableHead} element={element} name="lab-tests" actions={actions} />

        </Grid>
    )
}
