import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Doctors = () => {

    const router = useRouter();
    const tableHead = [

        "Name",
        "Registration Number",
        "Qualification",
        "Email",
        "Mobile",
        "Actions"

    ];

    const element = [

        "name",
        "registration_number",
        "qualification",
        "email",
        "mobile"

    ]


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/doctors/create")} bgColor="#229954">Create Doctors</CustomizedButton>

            <TableUI tableHead={tableHead} element={element} name="doctors" />

        </Grid>
    )
}
