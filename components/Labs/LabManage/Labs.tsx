import React from 'react'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../../utls/colors';

export const Labs = () => {

    const router = useRouter();

    const tableHead = [


        "Name",
        "Website",
        "Admin",
        "Location",
        "Contact",

    ];

    const element = [

        "name",
        "website",
        "lab_admin_name",
        "location",
        "lab_contact_no"

    ]

    const actions = [
        "OverView",
        "LabTest",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/lab/create")} bgColor={PRIMARY_COLOR}>Create Lab</CustomizedButton>

            <TableUI tableName="labs" tableHead={tableHead} element={element} name="lab" actions={actions} />

        </Grid>
    )
}
