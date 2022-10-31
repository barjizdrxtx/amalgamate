import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Doctors = () => {

    const router = useRouter();

    const themecolor = useThemeColor();

    const tableHead = [

        "Name",
        "Registration Number",
        "Email",
        "Mobile",
        "Create Time",
    ];

    const element = [

        "name",
        "registration_number",
        "email",
        "mobile",
        "createdAt",
    ]

    const actions = [
        "OverView",
        "Schedule",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/doctors/create")} bgColor={themecolor}>Create Doctors</CustomizedButton>

            <TableUI tableName="doctors" tableHead={tableHead} element={element} name="doctors" actions={actions} />

        </Grid>
    )
}
