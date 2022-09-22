import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { TableUI } from '../UI/TableUI/TableUI';
import { CustomizedButton } from '../UI/Button/CustomizedButton';


export const ClinicsDoctors = () => {

    const router = useRouter();

    const { institution_id } = router.query

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

            <CustomizedButton onClick={() => router.push({ pathname: `/clinics/doctors/create`, query: { institution_id: institution_id } })} bgColor="#229954">Create Doctors</CustomizedButton>

            <TableUI tableName="doctors" tableHead={tableHead} element={element} name={`clinics/doctors-list/${institution_id}`} actions={actions} />

        </Grid>
    )
}
