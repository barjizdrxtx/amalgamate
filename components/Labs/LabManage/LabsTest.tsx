import React from 'react'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../../utls/colors';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const LabsTest = () => {

    const router = useRouter();

    const themecolor = useThemeColor();

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

            <CustomizedButton onClick={() => router.push(`/lab/test/create`)} bgColor={themecolor}>Create Lab Test</CustomizedButton>

            <TableUI tableName="labs" tableHead={tableHead} element={element} name="lab-tests" actions={actions} />

        </Grid>
    )
}
