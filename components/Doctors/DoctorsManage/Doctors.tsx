import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../../utls/colors';

export const Doctors = () => {

    const router = useRouter();
    const tableHead = [

        "Name",
        "Registration Number",
        "Qualification",
        "Email",
        "Mobile",

    ];

    const element = [

        "name",
        "registration_number",
        "qualification",
        "email",
        "mobile"

    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];

    
    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/doctors/create")} bgColor={PRIMARY_COLOR}>Create Doctors</CustomizedButton>

            <TableUI tableName="doctors" tableHead={tableHead} element={element} name="doctors" actions={actions} />

        </Grid>
    )
}
